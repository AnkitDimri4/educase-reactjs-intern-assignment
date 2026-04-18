import { Heading, Input, Button } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

  const disabled = !name || !phone || !email || !password || !agency;

  function handleSubmit(e) {
    e.preventDefault();

    toast.success("Account created successfully");

    setTimeout(() => {
      navigate("/profile", { state: { name, email } });
    }, 500);
  }

  return (
    <div className="w-full h-full flex p-5 bg-[#F7F8F9]">
      <div className="h-full flex flex-col">
        <Heading content="Create your PopX account" className="leading-9 pr-32.5" />
        <form className="flex-1 flex flex-col justify-between text-[13px]" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Phone number"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Company name"
              name="company"
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <fieldset className="relative mt-4">
              <legend className="mb-1 text-[13px]">
                Are you an Agency?<span className="text-warning">*</span>
              </legend>
              <div className="flex gap-3">
                <label htmlFor="radio-yes" className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    id="radio-yes"
                    name="agency"
                    value="Yes"
                    className="scale-125 accent-blue"
                    onChange={(e) => setAgency(e.target.value)}
                  />
                  Yes
                </label>
                <label htmlFor="radio-no" className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    id="radio-no"
                    name="agency"
                    value="No"
                    className="scale-125 accent-blue"
                    onChange={(e) => setAgency(e.target.value)}
                  />
                  No
                </label>
              </div>
            </fieldset>
          </div>

          <Button
            name="Create Account"
            type="submit"
            category="primary"
            // category={disabled ? "primary" : "grey"}
            disabled={disabled}
            className="mt-3.5"
          />
        </form>
      </div>
    </div>
  );
}
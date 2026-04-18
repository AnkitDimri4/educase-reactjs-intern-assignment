import { Heading, Input, Button } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const disabled = !isEmailValid || !password;

  function handleSubmit(e) {
    e.preventDefault();

    toast.success("Logged in successfully");

    setTimeout(() => {
      navigate("/profile", { state: { email } });
    }, 500);
  }

  return (
    <div className="w-full h-full flex p-5 bg-[#F7F8F9]">
      <div>
        <Heading content="Signin to your PopX account" className="leading-9 pr-25" />
        <p className="text-primary opacity-[.6] pr-21.25 mt-2 text-[18px] leading-6.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form className="text-[13px]" onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter email address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          {email && !isEmailValid && (
            <p className="text-warning text-[11px] mt-1">Please enter a valid email address.</p>
          )}

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <Button
            name="Login"
            type="submit"
            category="disabled"
            disabled={disabled}
            className="mt-3.5 text-[16px]"
          />
        </form>
      </div>
    </div>
  );
}
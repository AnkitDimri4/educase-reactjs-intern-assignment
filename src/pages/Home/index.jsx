import { Heading, Button } from "../../components";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full h-full flex p-5 bg-[#F7F8F9]">
      <div className="mt-auto">
        <Heading content="Welcome to PopX" />
        <p className="text-primary opacity-[.6] pr-21.25 mb-7 text-[18px] leading-6.5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Link to="/signup" aria-label="Create new PopX account">
          <Button name="Create Account" category="primary" className="mb-3" />
        </Link>
        <Link to="/login" aria-label="Login to existing PopX account">
          <Button name="Already Registered? Login" category="secondary" />
        </Link>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import cameraIcon from "../assets/img/profileCamera.png";
import signoutIcon from "../assets/img/signout.svg";

export function Card({ picture, name, email, bio }) {
  const navigate = useNavigate();

  function handleSignout() {
    navigate("/");
  }

  return (
    <>
      <div className="mt-7.5 px-5">
        <div className="flex justify-between items-start gap-5">
          <div className="flex gap-5">
            <div className="relative">
              <img
                src={picture}
                alt={`${name} profile picture`}
                width="76px"
                height="76px"
              />
              <img
                src={cameraIcon}
                alt="upload image icon"
                className="absolute bottom-0 right-0"
                width="21px"
                height="23px"
              />
            </div>
            <div>
              <p className="text-[15px] font-medium">{name}</p>
              <p className="text-[14px]">{email}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSignout}
            className="flex items-center gap-1 text-[12px] text-warning"
            aria-label="Sign out"
          >
            <img
              src={signoutIcon}
              alt="sign out"
              width="26px"
              height="26px"
            />
            {/* <span></span> */}
          </button>
        </div>

        <p className="mt-7.5 text-[14px] leading-5.5">{bio}</p>
      </div>
      <div className="h-full border-y-2 border-dashed border-light-gray mt-3 mb-7" />
    </>
  );
}
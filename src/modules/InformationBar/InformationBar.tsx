import { useState } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";

import { LinkButtons } from "./LinkButtons";
import { useLoaderData } from "react-router-dom";
import { IconContext } from "react-icons";
import LoginModal from "./Login/LoginModal";

type ProfileData = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
};

const InformationBar = () => {
  const [showInfoBar, setShowInfoBar] = useState(true);
  const [loginModal, setLoginModal] = useState(false);

  const { profileImageUrl, infoBlurb, github, linkedin } =
    useLoaderData() as ProfileData;

  const showInfoBarHandler = () => {
    setShowInfoBar(!showInfoBar);
  };

  const showLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };
  return (
    <>
      {loginModal && <LoginModal closeModal={closeLoginModal} />}
      <div
        className={`element-bg
        transition-all ease-in-out duration-500
        fixed top-0 flex flex-col space-y-8 align-middle w-60 h-screen p-8
        ${showInfoBar ? "left-0" : "-left-52"}`}
      >
        <button
          className={`transition-all ease-in-out duration-500
        absolute top-10 left-52 rounded-full
        bg-slate-700 border-slate-800 border-4
        w-12 h-12 flex justify-center items-center
        ${showInfoBar ? "" : "rotate-180"}`}
          onClick={showInfoBarHandler}
        >
          <IconContext.Provider
            value={{
              size: "32px",
            }}
          >
            <BsFillCaretLeftFill />
          </IconContext.Provider>
        </button>
        <div className="rounded-full align-middle shadow-2xl border-4 border-slate-600 z-50">
          <img
            className="rounded-full align-middle w-auto h-auto"
            src={profileImageUrl}
          />
        </div>
        <LinkButtons github={github} linkedin={linkedin} />
        <span className="h-0.5 w-full bg-slate-600" />
        <div className="text-center text-sm font-mono">{infoBlurb}</div>
        <div className="grow" />
        <button
          className="h-10 w-10 border-slate-700 border-8 rounded-full 
       hover:w-44 transition-all ease-out duration-200 overflow-hidden
       text-slate-800 hover:text-slate-500 text-center font-mono font-semibold"
          onClick={showLoginModal}
        >
          LOGIN
        </button>
      </div>
    </>
  );
};

export default InformationBar;

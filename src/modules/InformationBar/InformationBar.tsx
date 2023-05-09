import { useState } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";

import { LinkButtons } from "./LinkButtons";
import { useLoaderData } from "react-router-dom";
import { IconContext } from "react-icons";

type ProfileData = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedIn?: string;
};

const InformationBar = () => {
  const [showInfoBar, setShowInfoBar] = useState(true);

  const { profileImageUrl, infoBlurb, github, linkedIn } =
    useLoaderData() as ProfileData;

  const showInfoBarHandler = () => {
    setShowInfoBar(!showInfoBar);
  };

  return (
    <div
      className={`transition-all ease-in-out duration-500
        fixed top-0 flex flex-col space-y-8 align-middle w-60 h-screen bg-slate-800 p-8
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
      <LinkButtons github={github} linkedin={linkedIn} />
      <span className="h-0.5 w-full bg-slate-600" />
      <div className="text-center text-sm font-mono">{infoBlurb}</div>
    </div>
  );
};

export default InformationBar;

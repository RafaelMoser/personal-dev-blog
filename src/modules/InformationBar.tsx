import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import profileImage from "../assets/126586126.png";

const InformationBar = () => {
  const [showInfoBar, setShowInfoBar] = useState(true);

  const showInfoBarHandler = () => {
    setShowInfoBar(!showInfoBar);
  };

  return (
    <div
      className={`transition-all ease-in-out duration-500
      fixed top-0 flex flex-col space-y-8 align-middle w-60 h-screen bg-slate-400 p-8 ${
        showInfoBar ? "left-0" : "-left-56"
      }`}
    >
      <button
        className={`transition-all ease-in-out duration-500 absolute top-10 left-56 rounded-full
         bg-slate-300 border-slate-500 border-4 w-8 h-8 flex justify-center items-center ${
           showInfoBar ? "" : "rotate-180"
         }`}
        onClick={showInfoBarHandler}
      >
        <FaChevronLeft />
      </button>
      <img
        className="rounded-full align-middle shadow-2xl border-4 border-slate-500"
        src={profileImage}
      />
      <LinkButtons />
      <span className="h-0.5 w-full bg-slate-800" />
      <div className="text-center text-sm font-mono">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        architecto libero nobis, sunt ullam illum quasi dicta sint quia odit
        dolorum, quod praesentium labore cupiditate ipsam sed ea officia non!
      </div>
    </div>
  );
};

type Props = { icons: string[] };

const LinkButtons = () => {
  const buttons = ["💣", "🖥", "🎮", "💣"];

  return (
    <div className="h-8 flex flex-row justify-stretch rounded-xl shadow-md divide-x divide-slate-800">
      {buttons.map((button, index) => (
        <a
          href="https://github.com/RafaelMoser/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center grow 
          bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
          hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
          active:from-slate-700 active:via-slate-800 active:to-slate-700 
          ${index == 0 ? "rounded-l-xl" : ""}
          ${index == buttons.length - 1 ? "rounded-r-xl" : ""}`}
        >
          {button}
        </a>
      ))}
    </div>
  );
};

export default InformationBar;

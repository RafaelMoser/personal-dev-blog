import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

import profileImage from "@/assets/126586126.png";
import { LinkButtons } from "./LinkButtons";

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

export default InformationBar;

import { createPortal } from "react-dom";
import { IconContext } from "react-icons";
import { CgClose } from "react-icons/cg";
type Props = {
  closeModal: () => void;
};

const LoginModal = (props: Props) => {
  return createPortal(
    <>
      <div
        className="bg-black/25 fixed top-0 left-0 w-full h-screen z-10 flex"
        onClick={props.closeModal}
      />
      <div className="element-bg fixed top-1/3 left-1/3 w-1/3 rounded-3xl z-20 ">
        <div
          className="clickable-bg absolute rounded-full h-8 w-8 top-2 left-2 basis-0 flex justify-center items-center"
          onClick={props.closeModal}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <CgClose />
          </IconContext.Provider>
        </div>
        <div className="flex flex-col p-10 space-y-10">
          <div className="grow flex flex-col space-y-2">
            <label className="text-slate-200 font-bold text-lg">Login</label>
            <input className="textinput-bg px-2 h-8 rounded-md" />
          </div>
          <div className="grow flex flex-col space-y-2">
            <label className="text-slate-200 font-bold text-lg">Password</label>
            <input className="textinput-bg px-2 h-8 rounded-md" />
          </div>
          <button className="clickable-bg rounded-xl py-2 px-8 self-end text-slate-200 font-bold text-lg">
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default LoginModal;

import { createPortal } from "react-dom";

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
      <div className="fixed top-1/3 left-1/3 w-1/3 rounded-3xl bg-slate-700 z-20 flex flex-col p-10 space-y-10">
        <div className="grow flex flex-col space-y-2">
          <label className="text-slate-200 font-bold text-lg">Login</label>
          <input className="bg-slate-600 h-8 rounded-md" />
        </div>
        <div className="grow flex flex-col space-y-2">
          <label className="text-slate-200 font-bold text-lg">Password</label>
          <input className="bg-slate-600 h-8 rounded-md" />
        </div>
        <button className="bg-slate-600 rounded-xl py-2 px-8 self-end text-slate-200 font-bold text-lg">
          Submit
        </button>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default LoginModal;

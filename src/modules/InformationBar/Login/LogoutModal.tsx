import { createPortal } from "react-dom";
import { useSubmit } from "react-router-dom";

type Props = {
  closeModal: () => void;
  showMessage: (message: string) => void;
};

const LogoutModal = (props: Props) => {
  const submit = useSubmit();

  const onConfirmHandle = () => {
    submit(null, { action: "/logout", method: "post" });
    props.showMessage("Logout Successful");
    props.closeModal();
  };

  return createPortal(
    <>
      <div
        className="bg-black/25 fixed top-0 left-0 w-full h-screen z-10 flex"
        onClick={props.closeModal}
      />
      <div
        className="element-bg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 rounded-3xl 
            flex flex-col justify-center items-center z-20 p-5 space-y-5"
      >
        <h2 className="text-slate-200 font-bold text-lg">
          Do you really want to log out?
        </h2>
        <div className="flex flex-row grow space-x-10">
          <button
            className="clickable-bg rounded-xl py-2 px-8 self-end text-slate-200 font-bold text-lg"
            onClick={onConfirmHandle}
          >
            Yes
          </button>
          <button
            className="clickable-bg rounded-xl py-2 px-8 self-end text-slate-200 font-bold text-lg"
            onClick={props.closeModal}
          >
            No
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default LogoutModal;

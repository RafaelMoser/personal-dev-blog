import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  message: string;
  closeModal: () => void;
};

const MessageModal = (props: Props) => {
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    setAnim(true);
    setTimeout(() => {
      setAnim(false);
      setTimeout(() => props.closeModal(), 300);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className={`${
        anim ? "-bottom-10" : "-bottom-40"
      } transition-all duration-300 ease-in-out bg-slate-600 fixed left-1/2 transform 
        -translate-x-1/2 -translate-y-3/4 rounded-3xl flex flex-col justify-center items-center z-20 p-5 `}
    >
      <h2 className="text-slate-200 font-bold text-lg">{props.message}</h2>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default MessageModal;

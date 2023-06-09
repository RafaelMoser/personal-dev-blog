import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconContext } from "react-icons";
import { CgClose } from "react-icons/cg";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

type Props = {
  closeModal: () => void;
  showMessage: (message: string) => void;
};

const LoginModal = (props: Props) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData();
  const nav = useNavigate();

  useEffect(() => {
    if (actionData === "SUCCESS") {
      props.closeModal();
      props.showMessage("Logged in succesfully");
      nav("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  return createPortal(
    <Form method="post" action="/login">
      <div
        className="bg-black/25 fixed top-0 left-0 w-full h-screen z-10 flex"
        onClick={props.closeModal}
      />
      <div className="element-bg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 rounded-3xl z-20 ">
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
            <label
              htmlFor="username"
              className="text-slate-200 font-bold text-lg"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="textinput-bg px-2 h-8 rounded-md"
            />
          </div>
          <div className="grow flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-slate-200 font-bold text-lg"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="textinput-bg px-2 h-8 rounded-md"
            />
          </div>
          <button
            disabled={isSubmitting}
            className="clickable-bg rounded-xl py-2 px-8 self-end text-slate-200 font-bold text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </Form>,
    document.getElementById("modal") as HTMLElement
  );
};

export default LoginModal;

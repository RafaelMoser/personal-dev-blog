import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const UpdateArticlePickerPage = () => {
  const [nanoId, setNanoId] = useState("");
  const [enableButton, setEnableButton] = useState(false);
  const idTextboxChangeHandler = (e: any) => {
    setNanoId(e.target.value);
    setEnableButton(e.target.value.length === 6);
  };

  return (
    <>
      <div className="flex flex-row space-x-6 element-bg rounded-lg items-center justify-center p-4">
        <label htmlFor="articleId" className="font-semibold w-24 text-right">
          Article ID:
        </label>
        <input
          id="id"
          type="text"
          name="id"
          className="textinput-bg rounded-md w-48 px-2"
          onChange={idTextboxChangeHandler}
        />
        <Link
          to={`${nanoId}`}
          className={`clickable-bg rounded-md w-24 text-center ${
            enableButton ? "" : "pointer-events-none"
          }`}
        >
          Load
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default UpdateArticlePickerPage;

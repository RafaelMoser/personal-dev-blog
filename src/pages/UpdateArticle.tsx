import { Outlet } from "react-router-dom";

const UpdateArticlePage = () => {
  return (
    <>
      <div className="flex flex-row space-x-6 element-bg rounded-lg items-center justify-center p-4">
        <label className="font-semibold w-24 text-right">Article id:</label>
        <input className="textinput-bg rounded-md w-48 px-2" />
        <button className="clickable-bg rounded-md w-24">Load</button>
      </div>
      <Outlet />
    </>
  );
};

export default UpdateArticlePage;

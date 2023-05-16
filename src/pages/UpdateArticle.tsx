import { Outlet } from "react-router-dom";

const UpdateArticlePage = () => {
  return (
    <>
      <div className="flex flex-row space-x-6">
        <label className="font-semibold">Article id:</label>
        <input className="rounded-md bg-slate-800 w-32" />
        <button className="">Load</button>
      </div>
      <Outlet />
    </>
  );
};

export default UpdateArticlePage;

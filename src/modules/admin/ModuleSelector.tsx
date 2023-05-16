import { NavLink, Outlet } from "react-router-dom";
const ModuleSelector = () => {
  return (
    <div>
      <div className="flex flex-row space-x-4">
        <NavLink
          to="newArticle"
          className={({ isActive }) =>
            `w-48 p-2 text-center bg-slate-700 rounded-xl ${
              isActive ? "outline outline-4 outline-cyan-800" : ""
            }`
          }
        >
          New Article
        </NavLink>
        <NavLink
          to="updateArticle"
          className={({ isActive }) =>
            `w-48 p-2 text-center bg-slate-700 rounded-xl ${
              isActive ? "outline outline-4 outline-cyan-800" : ""
            }`
          }
        >
          Update Article
        </NavLink>
        <NavLink
          to="updateProfile"
          className={({ isActive }) =>
            `w-48 p-2 text-center bg-slate-700 rounded-xl ${
              isActive ? "outline outline-4 outline-cyan-800" : ""
            }`
          }
        >
          Update Personal Information
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default ModuleSelector;

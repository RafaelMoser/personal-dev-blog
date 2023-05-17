import { NavLink, Outlet } from "react-router-dom";
const ModuleSelector = () => {
  return (
    <div>
      <div className="flex flex-row space-x-4 py-4">
        <NavLink
          to="newArticle"
          className={({ isActive }) =>
            `flex items-center justify-center text-center w-48 p-2 clickable-bg rounded-xl font-bold ${
              isActive ? "outline outline-4 outline-cyan-800" : ""
            }`
          }
        >
          New Article
        </NavLink>
        <NavLink
          to="updateArticle"
          className={({ isActive }) =>
            `flex items-center justify-center text-center  w-48 p-2 clickable-bg rounded-xl font-bold ${
              isActive ? "outline outline-4 outline-cyan-800" : ""
            }`
          }
        >
          Update Article
        </NavLink>
        <NavLink
          to="updateProfile"
          className={({ isActive }) =>
            `flex items-center justify-center text-center w-48 p-2 clickable-bg rounded-xl font-bold ${
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

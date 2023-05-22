import ModuleSelector from "../modules/admin/ModuleSelector";
import { useAccessToken } from "../util/Hooks";
import { ErrorResponse } from "@remix-run/router";

const AdminPage = () => {
  const { hasToken } = useAccessToken();
  if (!hasToken) {
    throw new ErrorResponse(401, "Unauthorized", { data: "Unauthorized" });
  }
  return (
    <div className="flex flex-col space-y-8 justify-center items-center p-10 m-auto w-1/3">
      <h1 className="text-5xl font-bold">Admin Page</h1>
      <ModuleSelector />
    </div>
  );
};

export default AdminPage;

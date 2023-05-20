import ModuleSelector from "../modules/admin/ModuleSelector";
import { useAccessToken } from "../util/Hooks";
import { ErrorResponse } from "@remix-run/router";

const AdminPage = () => {
  const { hasToken } = useAccessToken();
  if (!hasToken) {
    throw new ErrorResponse(401, "Unauthorized", { data: "Unauthorized" });
  }
  return (
    <div className="flex flex-col space-y-8 items-center p-10">
      <text className="text-5xl font-bold">Admin Page</text>
      <ModuleSelector />
    </div>
  );
};

export default AdminPage;

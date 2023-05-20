import ModuleSelector from "../modules/admin/ModuleSelector";
import { useAccessToken } from "../util/Hooks";

const AdminPage = () => {
  const { hasToken } = useAccessToken();
  if (!hasToken) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return (
    <div className="flex flex-col space-y-8 items-center p-10">
      <text className="text-5xl font-bold">Admin Page</text>
      <ModuleSelector />
    </div>
  );
};

export default AdminPage;

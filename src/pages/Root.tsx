import { Outlet } from "react-router-dom";
import InformationBar from "../modules/InformationBar";

const RootLayout = () => {
  return (
    <div className="relative text-slate-200 antialiased">
      <InformationBar />
      <main className="bg-slate-900">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

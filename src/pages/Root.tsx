import { Outlet } from "react-router-dom";
import InformationBar from "../modules/InformationBar";

const RootLayout = () => {
  return (
    <div className="relative">
      <InformationBar />
      <main className="w-full h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

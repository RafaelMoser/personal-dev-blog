import { Outlet } from "react-router-dom";
import InformationBar from "../modules/InformationBar/InformationBar";

const RootLayout = () => {
  return (
    <div className="relative base-bg">
      <InformationBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import InformationBar from "../modules/InformationBar";

const RootLayout = () => {
  return (
    <>
      <InformationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

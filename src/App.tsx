import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { InfoBarLoader } from "./modules/InformationBar/InformationBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: InfoBarLoader,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutme", element: <AboutMe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

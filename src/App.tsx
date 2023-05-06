import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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

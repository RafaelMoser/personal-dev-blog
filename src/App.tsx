import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import {
  articlePageLoader,
  infoBarLoader,
} from "./modules/loaders/ArticleLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: infoBarLoader,
    children: [
      { index: true, element: <Home />, loader: articlePageLoader },
      { path: "/page/:page", element: <Home />, loader: articlePageLoader },
      { path: "/aboutme", element: <AboutMe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

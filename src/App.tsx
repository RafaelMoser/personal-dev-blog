import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import { articlePageLoader, infoBarLoader } from "./loaders/MainPageLoaders";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: infoBarLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: articlePageLoader },
      { path: "/page/:page", element: <HomePage />, loader: articlePageLoader },
      { path: "/article/:id" },
      { path: "/aboutme", element: <AboutMePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

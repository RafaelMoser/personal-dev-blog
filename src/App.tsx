import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ArticleListPage from "./pages/ArticleList";
import AboutMePage from "./pages/AboutMe";
import { articlePageLoader, infoBarLoader } from "./loaders/MainPageLoaders";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";

const BLOG_NAME = "Rafael Moser's dev blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: infoBarLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage blogTitle={BLOG_NAME} />,
        id: "home",
        loader: articlePageLoader,
        children: [
          { path: "/", element: <ArticleListPage /> },
          { path: "/home", element: <ArticleListPage /> },
          { path: "/page/", element: <ArticleListPage /> },
          { path: "/page/:page", element: <ArticleListPage /> },
          { path: "/article/:id" },
        ],
      },
      { path: "/aboutme", element: <AboutMePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ArticleListPage from "./pages/ArticleList";
import AboutMePage from "./pages/AboutMe";
import {
  articlePageLoader,
  infoBarLoader,
  singleArticleLoader,
} from "./loaders/HttpRequests";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SingleArticlePage from "./pages/SingleArticle";
import AuthContext from "./store/auth-context";
import AdminPage from "./pages/Admin";
import NewArticlePage from "./pages/NewArticle";
import UpdateArticlePage from "./pages/UpdateArticle";
import UpdateProfilePage from "./pages/UpdateProfile";

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
        ],
      },
      {
        path: "/article/:nanoId",
        element: <SingleArticlePage />,
        loader: singleArticleLoader,
      },
      { path: "/aboutme", element: <AboutMePage /> },
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            path: "/admin/newArticle",
            element: <NewArticlePage />,
          },
          {
            path: "/admin/updateArticle",
            element: <UpdateArticlePage />,
          },
          {
            path: "/admin/updateProfile",
            element: <UpdateProfilePage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthContext.Provider value={{ accessToken: "" }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

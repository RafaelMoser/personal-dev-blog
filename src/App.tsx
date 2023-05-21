import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ArticleListPage from "./pages/article/ArticleList";
import AboutMePage from "./pages/AboutMe";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SingleArticlePage from "./pages/article/SingleArticle";
import AdminPage from "./pages/Admin";
import NewArticlePage from "./pages/admin/NewArticle";
import UpdateArticlePickerPage from "./pages/admin/UpdateArticlePicker";
import UpdateProfilePage from "./pages/admin/UpdateProfile";
import * as loaders from "./util/Loaders";
import * as actions from "./util/Actions";
import UpdateArticlePage from "./pages/admin/UpdateArticle";
import { useAccessToken } from "./util/Hooks";
import { useEffect } from "react";
const BLOG_NAME = "Rafael Moser's dev blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: loaders.infoBarLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        action: actions.sendLoginAction,
      },
      {
        path: "/logout",
        action: actions.sendLogoutAction,
      },
      {
        element: <HomePage blogTitle={BLOG_NAME} />,
        id: "home",
        loader: loaders.articlePageLoader,
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
        loader: loaders.singleArticleLoader,
      },
      { path: "/aboutme", element: <AboutMePage /> },
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            path: "/admin/newArticle",
            element: <NewArticlePage />,
            action: actions.newArticleAction,
          },
          {
            path: "/admin/updateArticle",
            element: <UpdateArticlePickerPage />,
            children: [
              {
                path: "/admin/updateArticle/:nanoId",
                element: <UpdateArticlePage />,
                loader: loaders.singleArticleLoader,
                action: actions.updateArticleAction,
              },
            ],
          },
          {
            path: "/admin/updateProfile",
            element: <UpdateProfilePage />,
            loader: loaders.blogUpdateDataLoader,
            action: actions.updateBlogInfoAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  const { accessToken, tokenDuration } = useAccessToken();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    if (accessToken === "EXPIRED") {
      actions.refreshTokenAction();
      return;
    }

    setTimeout(() => {
      actions.refreshTokenAction();
    }, tokenDuration);
  }, [accessToken, tokenDuration]);

  return <RouterProvider router={router} />;
}

export default App;

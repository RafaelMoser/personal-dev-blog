import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ArticleListPage from "./pages/article/ArticleList";
import AboutMePage from "./pages/AboutMe";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import SingleArticlePage from "./pages/article/SingleArticle";
import AdminPage from "./pages/Admin";
import NewArticlePage from "./pages/admin/NewArticle";
import UpdateArticlePage from "./pages/admin/UpdateArticle";
import UpdateProfilePage from "./pages/admin/UpdateProfile";
import * as loaders from "./util/Loaders";
import * as actions from "./util/Actions";
const BLOG_NAME = "Rafael Moser's dev blog";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: loaders.authLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        loader: loaders.infoBarLoader,
        children: [
          {
            path: "/login",
            action: actions.sendLoginAction,
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
                loader: loaders.checkAuthLoader,
              },
              {
                path: "/admin/updateArticle",
                element: <UpdateArticlePage />,
                loader: loaders.checkAuthLoader,
              },
              {
                path: "/admin/updateProfile",
                element: <UpdateProfilePage />,
                loader: () =>
                  defer({
                    auth: loaders.checkAuthLoader(),
                    data: loaders.blogUpdateDataLoader(),
                  }),
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

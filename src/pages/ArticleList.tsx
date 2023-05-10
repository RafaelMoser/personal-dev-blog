import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import { Suspense } from "react";
import ArticleList, { Article } from "../modules/Article/ArticleList";
import PagePicker from "../modules/Article/PagePicker";

type ArticleListData = {
  articles: Article[];
  pageCount: number;
};

type Params = {
  page: string;
};

const ArticleListPage = () => {
  const { articles, pageCount } = useRouteLoaderData("home") as ArticleListData;
  const { page } = useParams() as Params;
  const currentPage = +page || 1;

  return (
    <div className="flex flex-col space-y-8 items-center">
      <Suspense fallback={<p className="text-5xl">loading</p>}>
        <Await resolve={articles}>
          {(loadedArticles) => (
            <ArticleList articles={loadedArticles} pageCount={pageCount} />
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p className="text-5xl">loading</p>}>
        <Await resolve={pageCount}>
          {(loadedPageCount) => (
            <PagePicker
              pageCount={loadedPageCount.pageCount}
              currentPage={currentPage}
            />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default ArticleListPage;

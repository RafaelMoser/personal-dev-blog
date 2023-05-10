import { Await, useRouteLoaderData } from "react-router-dom";
import { Suspense } from "react";
import ArticleList from "../modules/Article/ArticleList";
import { Article } from "../modules/Article/ArticleContainer";

type ArticleList = {
  articles: Article[];
  pageCount: number;
};

const ArticleListPage = () => {
  const { articles } = useRouteLoaderData("home") as ArticleList;

  return (
    <div className="flex flex-col space-y-8 items-center">
      <Suspense fallback={<p className="text-5xl">loading</p>}>
        <Await resolve={articles}>
          {(loadedArticles) => <ArticleList articles={loadedArticles} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default ArticleListPage;

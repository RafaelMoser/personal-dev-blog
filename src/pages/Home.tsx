import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import ArticleList, { Article } from "../modules/Article/ArticleList";

type ArticleList = {
  articles: Article[];
};

const HomePage = () => {
  const { articles } = useLoaderData() as ArticleList;

  return (
    <div className="bg-white w-full h-full">
      <h1 className="text-5xl font-mono font-bold text-center py-10">
        PAGE TITLE
      </h1>
      <div className="flex flex-col space-y-8 items-center">
        <Suspense fallback={<p className="text-5xl">loading</p>}>
          <Await resolve={articles}>
            {(loadedArticles) => <ArticleList articles={loadedArticles} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

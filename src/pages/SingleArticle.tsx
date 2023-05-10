import { Await, useLoaderData } from "react-router-dom";
import ArticleContainer, { Article } from "../modules/Article/ArticleContainer";
import { Suspense } from "react";

const SingleArticlePage = () => {
  const article = useLoaderData() as Article;

  return (
    <Suspense fallback={<p className="text-5xl">loading</p>}>
      <Await resolve={article}>
        {(loadedArticle) => <ArticleContainer article={loadedArticle} />}
      </Await>
    </Suspense>
  );
};

export default SingleArticlePage;

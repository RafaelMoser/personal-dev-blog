import { Await, useLoaderData } from "react-router-dom";
import ArticleContainer, { Article } from "../modules/Article/ArticleContainer";
import { Suspense } from "react";
import SingleArticleFooter from "../modules/Article/SingleArticleFooter";

type SingleArticleData = {
  article: Article;
  prevNanoId?: string;
  prevTitle?: string;
  nextNanoId?: string;
  nextTitle?: string;
};

const SingleArticlePage = () => {
  const articleData = useLoaderData() as SingleArticleData;
  return (
    <div className="flex flex-col items-center py-10">
      <Suspense fallback={<p className="text-5xl">loading</p>}>
        <Await resolve={articleData}>
          {(loadedData) => <ArticleContainer article={loadedData.article} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={articleData}>
          {(loadedData) => (
            <SingleArticleFooter
              prevNanoId={loadedData.prevNanoId}
              prevTitle={loadedData.prevTitle}
              nextNanoId={loadedData.nextNanoId}
              nextTitle={loadedData.nextTitle}
            />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default SingleArticlePage;

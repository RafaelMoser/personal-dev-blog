import { Await, useLoaderData } from "react-router-dom";
import ArticleContainer, { Article } from "../modules/Article/ArticleContainer";
import { Suspense } from "react";
import SingleArticleFooter from "../modules/Article/SingleArticleFooter";

type SingleArticleData = {
  article: Article;
  prev?: string;
  next?: string;
};

const SingleArticlePage = () => {
  const articleData = useLoaderData() as SingleArticleData;
  return (
    <div className="flex flex-col items-center py-10">
      <Suspense fallback={<p className="text-5xl">loading</p>}>
        <Await resolve={articleData}>
          {(loadedData) => (
            <ArticleContainer article={loadedData.data.article} />
          )}
        </Await>
      </Suspense>
      <div>
        <Suspense>
          <Await resolve={articleData}>
            {(loadedData) => (
              <SingleArticleFooter
                prev={loadedData.data.prev}
                next={loadedData.data.next}
              />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default SingleArticlePage;

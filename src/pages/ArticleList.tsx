import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import ArticleList from "../modules/Article/ArticleList";
import ArticleListFooter from "../modules/Article/ArticleListFooter";
import { loadArticles } from "../loaders/MainPageLoaders";
import { Article } from "../modules/Article/ArticleContainer";

type ArticleListData = {
  articles: Article[];
  pageCount: number;
};

type Params = {
  page: string;
};

const ArticleListPage = () => {
  const data = useRouteLoaderData("home") as ArticleListData;
  const { page } = useParams() as Params;
  const [articles, setArticles] = useState(data.articles);
  const [pageCount] = useState(data.pageCount);
  const [currentPage, setCurrentPage] = useState(+page || 1);

  useEffect(() => {
    const fetchData = async () => {
      setArticles(await loadArticles(+page || 1));
    };

    setCurrentPage(+page || 1);
    fetchData();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

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
            <ArticleListFooter
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

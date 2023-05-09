import ArticleContainer from "./ArticleContainer";

export type Article = {
  nanoId: string;
  title: string;
  publishDate: string;
  publishTime: string;
  articleBody: string;
};

type Props = { articles: Article[] };

const ArticleList = (props: Props) => {
  return (
    <>
      {props.articles.map((article) => (
        <ArticleContainer key={article.nanoId} article={article} />
      ))}
    </>
  );
};

export default ArticleList;

import ArticleContainer, { Article } from "./ArticleContainer";

type Props = { articles: Article[]; pageCount: number };

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

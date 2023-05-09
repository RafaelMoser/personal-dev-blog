import ArticleContainer from "./ArticleContainer";

export type Article = {
  key: string;
  title: string;
  publishDate: string;
  articleBody: string;
};

type Props = { articles: Article[] };

const ArticleList = (props: Props) => {
  return (
    <>
      {props.articles.map((article) => (
        <ArticleContainer
          articleTitle={article.title}
          articleBody={article.articleBody}
        />
      ))}
    </>
  );
};

export default ArticleList;

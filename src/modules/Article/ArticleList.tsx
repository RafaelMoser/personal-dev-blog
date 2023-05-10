import ArticleContainer from "./ArticleContainer";
import PagePicker from "./PagePicker";

export type Article = {
  nanoId: string;
  title: string;
  publishDate: string;
  publishTime: string;
  articleBody: string;
};

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

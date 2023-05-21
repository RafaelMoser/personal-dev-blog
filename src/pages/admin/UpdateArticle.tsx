import { useLoaderData } from "react-router-dom";
import EditArticle from "../../modules/admin/EditArticle";

type ArticleData = {
  article: {
    title: string;
    articleBody: string;
  };
};

const UpdateArticlePage = () => {
  const data = useLoaderData() as ArticleData;
  return (
    <EditArticle
      title={data.article.title}
      articleBody={data.article.articleBody}
      new={false}
    />
  );
};

export default UpdateArticlePage;

import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

export type Article = {
  nanoId: string;
  title: string;
  publishDateTime: string;
  articleBody: string;
};

type Props = { article: Article };

const ArticleContainer = (props: Props) => {
  const date = new Date(props.article.publishDateTime);

  const publishDateString = `${date.toDateString().substring(4)}, ${date
    .toTimeString()
    .substring(0, 5)} ${date.toTimeString().substring(18)}`;
  return (
    <div className="element-bg w-1/2 h-30 rounded-md shadow-2xl flex flex-col p-4">
      <h1 className="text-2xl indent-6 font-semibold">{props.article.title}</h1>
      <p className="text-xs pb-4 indent-6 text-slate-400">
        Published {publishDateString}
      </p>
      <article className="whitespace-pre-wrap indent-4">
        {parse(props.article.articleBody)}
      </article>
      <div>
        <NavLink
          to={`/article/${props.article.nanoId}`}
          className="text-xs underline text-slate-300 hover:text-cyan-600 "
        >
          Direct link to this article
        </NavLink>
      </div>
    </div>
  );
};

export default ArticleContainer;

import { NavLink } from "react-router-dom";
import { Article } from "./ArticleList";

type Props = { article: Article };

const ArticleContainer = (props: Props) => {
  let numKey = 0;
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-800 flex flex-col p-4">
      <h1 className="text-2xl indent-6 font-semibold">{props.article.title}</h1>
      <p className="text-xs pb-4 indent-6">
        Published{" "}
        <span className="text-orange-900">{props.article.publishDate}</span>,{" "}
        <span className="text-orange-900">{props.article.publishTime}</span>
      </p>
      <article className="whitespace-pre-wrap indent-4">
        {props.article.articleBody.split("\n").map((paragraph) => {
          numKey += 1;
          return (
            <p key={props.article.nanoId + numKey} className="pb-4">
              {paragraph}
            </p>
          );
        })}
      </article>
      <div>
        <NavLink
          to={`/article/${props.article.nanoId}`}
          className="text-xs underline text-blue-600 hover:text-cyan-600 "
        >
          Direct link to this article
        </NavLink>
      </div>
    </div>
  );
};

export default ArticleContainer;

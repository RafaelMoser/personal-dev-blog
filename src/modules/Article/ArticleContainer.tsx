type Props = { articleTitle: string; articleBody: string };

const ArticleContainer = (props: Props) => {
  let key = 0;
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-200 flex flex-col p-5">
      <h1 className="text-2xl indent-6 pb-8 font-semibold">
        {props.articleTitle}
      </h1>
      <article className="whitespace-pre-wrap indent-4">
        {props.articleBody.split("\n").map((paragraph) => {
          key += 1;
          return (
            <p key={key} className="pb-4">
              {paragraph}
            </p>
          );
        })}
      </article>
    </div>
  );
};

export default ArticleContainer;

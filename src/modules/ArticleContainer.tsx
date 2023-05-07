type Props = { articleTitle: string; articleBody: string };

const ArticleContainer = (props: Props) => {
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-200 flex flex-col p-5">
      <h1 className="text-xl">{props.articleTitle}</h1>
      <p>{props.articleBody}</p>
    </div>
  );
};

export default ArticleContainer;

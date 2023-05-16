type Props = {
  updateMode: boolean;
  title?: string;
  articleBody?: string;
};

const EditArticle = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label className="font-bold text-slate-300">Title</label>
        <input className="rounded-md bg-slate-800" value={props.title} />
      </div>
      <div className="flex flex-col">
        <label className="font-bold text-slate-300">Article Body</label>
        <textarea
          className="h-96 rounded-md bg-slate-800"
          value={props.articleBody}
        />
      </div>
    </div>
  );
};

export default EditArticle;

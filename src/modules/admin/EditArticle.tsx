type Props = {
  title?: string;
  articleBody?: string;
};

const EditArticle = (props: Props) => {
  return (
    <form className="flex flex-col element-bg p-4 rounded-lg space-y-4">
      <div className="flex flex-col">
        <label className="font-bold text-slate-300">Title</label>
        <input className="rounded-md textinput-bg p-2" value={props.title} />
      </div>
      <div className="flex flex-col">
        <label className="font-bold text-slate-300">Article Body</label>
        <textarea
          className="h-[500px] rounded-md textinput-bg p-2 resize-none"
          value={props.articleBody}
        />
      </div>
      <button className="clickable-bg p-2 self-end rounded-md">Submit</button>
    </form>
  );
};

export default EditArticle;

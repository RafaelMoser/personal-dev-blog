type Props = {
  updateMode: boolean;
  title?: string;
  articleBody?: string;
};

const EditArticle = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label>Title</label>
        <input value={props.title} />
      </div>
      <div className="flex flex-col">
        <label>Article Body</label>
        <textarea className="h-96" value={props.articleBody} />
      </div>
    </div>
  );
};

export default EditArticle;

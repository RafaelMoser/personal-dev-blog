type Props = {
  title?: string;
  articleBody?: string;
};

const EditArticle = (props: Props) => {
  return (
    <div>
      <div>
        <label>Title</label>
        <input value={props.title} />
      </div>
      <div>
        <label>Article Body</label>
        <input value={props.articleBody} />
      </div>
    </div>
  );
};

export default EditArticle;

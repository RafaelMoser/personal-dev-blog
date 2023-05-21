import { Form } from "react-router-dom";

type Props = {
  title?: string;
  articleBody?: string;
  new: boolean;
};

const EditArticle = (props: Props) => {
  return (
    <Form
      method={props.new ? "PUT" : "PATCH"}
      className="flex flex-col element-bg p-4 rounded-lg space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="font-bold text-slate-300">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="rounded-md textinput-bg p-2"
          defaultValue={props.title}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="body" className="font-bold text-slate-300">
          Article Body
        </label>
        <textarea
          id="articleBody"
          name="articleBody"
          className="h-[500px] rounded-md textinput-bg p-2 resize-none"
          defaultValue={props.articleBody}
        />
      </div>
      <button className="clickable-bg p-2 self-end rounded-md">Submit</button>
    </Form>
  );
};

export default EditArticle;

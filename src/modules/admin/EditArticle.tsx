import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import MessageModal from "../UI/MessageModal";
import { Editor } from "@tinymce/tinymce-react";

type Props = {
  title?: string;
  articleBody?: string;
  new: boolean;
};

const EditArticle = (props: Props) => {
  const [messageModal, setMessageModal] = useState(false);
  const [message, setMessage] = useState("");
  const actionData = useActionData();

  useEffect(() => {
    if (actionData === "SUCCESS") {
      setMessage(
        props.new
          ? "New article published successfully"
          : "Article updated successfully"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);
  return (
    <>
      {messageModal && (
        <MessageModal
          message={message}
          closeModal={() => setMessageModal(false)}
        />
      )}
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
          <Editor
            apiKey="z0kngmfsjeesr23imahs3vage6ktvbw72wupfh983cuyxauk"
            initialValue={props.articleBody}
            init={{
              branding: false,
              height: 500,
              width: "full",
              menubar: true,
              plugins:
                "preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
              toolbar:
                "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
              image_advtab: true,
            }}
            textareaName="articleBody"
          />
        </div>
        <button className="clickable-bg p-2 self-end rounded-md">Submit</button>
      </Form>
    </>
  );
};

export default EditArticle;

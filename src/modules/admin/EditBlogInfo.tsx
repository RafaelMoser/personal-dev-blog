import { Form, useActionData, useLoaderData } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";
import MessageModal from "../UI/MessageModal";

type BlogInfo = {
  blogTitle: string;
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
  email?: string;
  aboutMe: string;
};

const EditBlogInfo = () => {
  const loadedData = useLoaderData() as BlogInfo;
  const [messageModal, setMessageModal] = useState(false);
  const [message, setMessage] = useState("");
  const actionData = useActionData() as string;

  useEffect(() => {
    if (actionData === "SUCCESS") {
      setMessageModal(true);
      setMessage("Blog info updated");
    } else if (actionData === "VALIDATION_ERROR") {
      setMessageModal(true);
      setMessage("A validation error occurred");
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
        method="post"
        className="flex flex-col element-bg rounded-xl p-4 space-y-2"
      >
        <div className="flex flex-col">
          <label htmlFor="blog title" className="font-bold text-slate-300">
            Blog Title
          </label>
          <input
            id="blog title"
            type="text"
            name="blogTitle"
            className="textinput-bg rounded-md p-2"
            defaultValue={loadedData.blogTitle}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="profile image url"
            className="font-bold text-slate-300"
          >
            Profile Image
          </label>
          <input
            id="profile image url"
            type="url"
            name="profileImageUrl"
            className="textinput-bg rounded-md p-2"
            defaultValue={loadedData.profileImageUrl}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="information blurb"
            className="font-bold text-slate-300"
          >
            Blog information blurb
          </label>
          <input
            id="information blurb"
            type="text"
            name="infoBlurb"
            className="textinput-bg rounded-md p-2"
            defaultValue={loadedData.infoBlurb}
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label htmlFor="e-mail" className="font-bold text-slate-300">
              E-Mail
            </label>
            <input
              id="e-mail"
              type="email"
              name="email"
              className="textinput-bg rounded-md p-2 w-44"
              defaultValue={loadedData.email}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="github" className="font-bold text-slate-300">
              GitHub Link
            </label>
            <input
              id="github"
              name="github"
              type="url"
              className="textinput-bg rounded-md p-2 w-44"
              defaultValue={loadedData.github}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedin" className="font-bold text-slate-300">
              LinkedIn Link
            </label>
            <input
              id="linkedin"
              type="url"
              name="linkedin"
              className="textinput-bg rounded-md p-2 w-44"
              defaultValue={loadedData.linkedin}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-slate-300">About me page body</label>
          <Editor
            apiKey="z0kngmfsjeesr23imahs3vage6ktvbw72wupfh983cuyxauk"
            initialValue={loadedData.aboutMe}
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
            textareaName="aboutMe"
          />
        </div>
        <button className="clickable-bg p-2 self-end rounded-md">Submit</button>
      </Form>
    </>
  );
};

export default EditBlogInfo;

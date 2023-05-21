import { Form, useActionData, useLoaderData } from "react-router-dom";

type BlogInfo = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
  email?: string;
  aboutMe: string;
};

const EditBlogInfo = () => {
  const loadedData = useLoaderData() as BlogInfo;
  const actionResponse = useActionData();

  return (
    <>
      <Form
        method="post"
        className="flex flex-col element-bg rounded-xl p-4 space-y-2"
      >
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
          <textarea
            name="aboutMe"
            className="textinput-bg rounded-md p-2 resize-none h-80"
            defaultValue={loadedData.aboutMe}
          />
        </div>
        <button className="clickable-bg p-2 self-end rounded-md">Submit</button>
      </Form>
      {actionResponse && <p>Success!</p>}
    </>
  );
};

export default EditBlogInfo;

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

type BlogInfo = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
  email?: string;
  aboutMe: string;
};

const EditBlogInfo = () => {
  const data = useLoaderData() as BlogInfo;

  return (
    <div className="flex flex-col element-bg rounded-xl p-4 space-y-2">
      <Suspense>
        <Await resolve={data}>
          {(loadedData) => (
            <>
              <div className="flex flex-col">
                <label className="font-bold text-slate-300">
                  Profile Image
                </label>
                <input
                  className="textinput-bg rounded-md p-2"
                  value={loadedData.profileImageUrl}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-slate-300">
                  Blog information blurb
                </label>
                <input
                  className="textinput-bg rounded-md p-2"
                  value={loadedData.infoBlurb}
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <label className="font-bold text-slate-300">E-Mail</label>
                  <input
                    className="textinput-bg rounded-md p-2 w-44"
                    value={loadedData.email}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-slate-300">
                    GitHub Link
                  </label>
                  <input
                    className="textinput-bg rounded-md p-2 w-44"
                    value={loadedData.github}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold text-slate-300">
                    LinkedIn Link
                  </label>
                  <input
                    className="textinput-bg rounded-md p-2 w-44"
                    value={loadedData.linkedin}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-slate-300">
                  About me page body
                </label>
                <textarea
                  className="textinput-bg rounded-md p-2 resize-none h-80"
                  value={loadedData.aboutMe}
                />
              </div>
              <button className="clickable-bg p-2 self-end rounded-md">
                Submit
              </button>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default EditBlogInfo;

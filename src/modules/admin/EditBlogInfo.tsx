import { useLoaderData } from "react-router-dom";

type BlogInfo = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
  email?: string;
  aboutMe: string;
};

const EditBlogInfo = () => {
  const { profileImageUrl, infoBlurb, email, github, linkedin, aboutMe } =
    useLoaderData() as BlogInfo;

  return (
    <div>
      <div>
        <label>Profile Image</label>
        <input value={profileImageUrl} />
      </div>
      <div>
        <label>Blog information blurb</label>
        <input value={infoBlurb} />
      </div>
      <div>
        <div>
          <label>E-Mail</label>
          <input value={email} />
        </div>
        <div>
          <label>GitHub Link</label>
          <input value={github} />
        </div>
        <div>
          <label>LinkedIn Link</label>
          <input value={linkedin} />
        </div>
      </div>
      <div>
        <label>About me page body</label>
        <input value={aboutMe} />
      </div>
    </div>
  );
};

export default EditBlogInfo;

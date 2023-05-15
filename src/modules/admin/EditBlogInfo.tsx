type Props = {
  profileImageUrl: string;
  infoBlurb: string;
  github?: string;
  linkedin?: string;
  email?: string;
  aboutMe: string;
};

const EditBlogInfo = (props: Props) => {
  return (
    <div>
      <div>
        <label>Profile Image</label>
        <input value={props.profileImageUrl} />
      </div>
      <div>
        <label>Blog information blurb</label>
        <input value={props.infoBlurb} />
      </div>
      <div>
        <div>
          <label>E-Mail</label>
          <input value={props.email} />
        </div>
        <div>
          <label>GitHub Link</label>
          <input value={props.github} />
        </div>
        <div>
          <label>LinkedIn Link</label>
          <input value={props.linkedin} />
        </div>
      </div>
      <div>
        <label>About me page body</label>
        <input value={props.aboutMe} />
      </div>
    </div>
  );
};

export default EditBlogInfo;

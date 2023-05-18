import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

type Props = {
  github?: string;
  linkedin?: string;
  email?: string;
};

export const LinkButtons = (props: Props) => {
  const buttons = [
    { link: props.email, icon: <MdMail /> },
    { link: props.github, icon: <FaGithub /> },
    { link: props.linkedin, icon: <FaLinkedin /> },
  ];

  return (
    <div className="h-8 flex flex-row rounded-3xl shadow-md divide-x divide-slate-800">
      {buttons.map(
        (button) =>
          button.link && (
            <a
              key={button.link}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-bg h-8 w-40 flex flex-auto justify-center items-center text-center
                first-of-type:rounded-l-3xl last-of-type:rounded-r-3xl"
              title={button.link}
            >
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "28px",
                }}
              >
                {button.icon}
              </IconContext.Provider>
            </a>
          )
      )}
    </div>
  );
};

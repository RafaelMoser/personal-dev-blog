import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  github?: string;
  linkedin?: string;
};

export const LinkButtons = (props: Props) => {
  const buttons = [
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
              className="h-8 w-40 flex flex-auto justify-center content-center
                bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
                hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
                active:from-slate-700 active:via-slate-800 active:to-slate-700 
                first-of-type:rounded-l-3xl last-of-type:rounded-r-3xl"
              title={button.link}
            >
              <IconContext.Provider
                value={{
                  color: "black",
                  size: "32px",
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

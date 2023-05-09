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
    <div className="h-8 flex flex-row justify-stretch rounded-xl shadow-md divide-x divide-slate-800">
      {buttons.map(
        (button, index) =>
          button.link && (
            <a
              key={button.link}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center grow 
                bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
                hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
                active:from-slate-700 active:via-slate-800 active:to-slate-700 
                first-of-type:rounded-l-xl last-of-type:rounded-r-xl"
            >
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "25px",
                  style: { display: "inline-block", textAlign: "center" },
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

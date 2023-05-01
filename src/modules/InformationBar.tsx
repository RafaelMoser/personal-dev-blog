import profileImage from "../assets/126586126.png";

const InformationBar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col space-y-8 align-middle w-60 h-screen bg-slate-400 p-8">
      <img
        className="rounded-full align-middle shadow-2xl"
        src={profileImage}
      />
      <LinkButtons />
      <span className="h-0.5 w-full bg-slate-800" />
      <div className="text-center text-sm font-mono">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        architecto libero nobis, sunt ullam illum quasi dicta sint quia odit
        dolorum, quod praesentium labore cupiditate ipsam sed ea officia non!
      </div>
    </div>
  );
};

type Props = { icons: string[] };

const LinkButtons = () => {
  const buttons = ["💣", "🖥", "🎮", "💣"];

  return (
    <div className="h-8 flex flex-row justify-stretch rounded-xl shadow-md divide-x divide-slate-800">
      {buttons.map((button, index) => (
        <a
          href="https://github.com/RafaelMoser/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center grow 
          bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 
          hover:from-slate-700 hover:via-slate-400 hover:to-slate-700 
          active:from-slate-700 active:via-slate-800 active:to-slate-700 
          ${index == 0 ? "rounded-l-xl" : ""}
          ${index == buttons.length - 1 ? "rounded-r-xl" : ""}`}
        >
          {button}
        </a>
      ))}
    </div>
  );
};

export default InformationBar;

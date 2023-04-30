import profileImage from "../../assets/126586126.png";
const InformationBar = () => {
  return (
    <div className="flex flex-col space-y-8 align-middle w-60 h-screen bg-slate-400 p-8">
      <img
        className="rounded-full align-middle shadow-2xl"
        src={profileImage}
      />
      <LinkButtons />
    </div>
  );
};

type Props = { icons: string[] };

const LinkButtons = () => {
  const buttons = ["💣", "🖥", "🎮"];

  return (
    <div className="h-8 flex flex-row justify-stretch rounded-xl shadow-md bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 divide-x divide-slate-800">
      {buttons.map((button) => (
        <button className="text-center grow">{button}</button>
      ))}
    </div>
  );
};

export default InformationBar;

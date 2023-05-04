export const LinkButtons = () => {
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

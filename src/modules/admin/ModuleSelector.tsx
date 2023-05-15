const ModuleSelector = () => {
  return (
    <div className="flex flex-row space-x-4">
      <button className="w-48 p-2 text-center bg-slate-700 rounded-xl">
        New Article
      </button>
      <button className="w-48 p-2 text-center bg-slate-700 rounded-xl">
        Update Article
      </button>
      <button className="w-48 p-2 text-center bg-slate-700 rounded-xl">
        Update Personal Information
      </button>
    </div>
  );
};

export default ModuleSelector;

import { useState } from "react";
import EditArticle from "./EditArticle";
import EditBlogInfo from "./EditBlogInfo";
const ModuleSelector = () => {
  //modes
  //0:off, 1:new article, 2:update article, 3:update personal info
  const [selectedModule, setSelectedModule] = useState(0);

  return (
    <div>
      <div className="flex flex-row space-x-4">
        <button
          className={`w-48 p-2 text-center bg-slate-700 rounded-xl ${
            selectedModule === 1 ? "outline outline-4 outline-cyan-800" : ""
          }`}
          onClick={() => setSelectedModule(1)}
        >
          New Article
        </button>
        <button
          className={`w-48 p-2 text-center bg-slate-700 rounded-xl ${
            selectedModule === 2 ? "outline outline-4 outline-cyan-800" : ""
          }`}
          onClick={() => setSelectedModule(2)}
        >
          Update Article
        </button>
        <button
          className={`"w-48 p-2 text-center bg-slate-700 rounded-xl ${
            selectedModule === 3 ? "outline outline-4 outline-cyan-800" : ""
          }`}
          onClick={() => setSelectedModule(3)}
        >
          Update Personal Information
        </button>
      </div>
      {selectedModule === 1 && <EditArticle updateMode={false} />}
      {selectedModule === 2 && <EditArticle updateMode={true} />}
      {selectedModule === 3 && <EditBlogInfo />}
    </div>
  );
};

export default ModuleSelector;

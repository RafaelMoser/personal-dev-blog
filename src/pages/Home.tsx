import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { loadBlogTitle } from "../util/Loaders";

type TitleData = { blogTitle: string };

const HomePage = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = (await loadBlogTitle()) as TitleData;
      setTitle(data.blogTitle);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <h1 className="text-5xl font-mono font-bold text-center py-10">
        {title}
      </h1>
      <Outlet />
    </div>
  );
};

export default HomePage;

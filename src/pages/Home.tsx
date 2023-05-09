import { Outlet } from "react-router";

type Props = { blogTitle: string };

const HomePage = (props: Props) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-5xl font-mono font-bold text-center py-10">
        {props.blogTitle}
      </h1>
      <Outlet />
    </div>
  );
};

export default HomePage;

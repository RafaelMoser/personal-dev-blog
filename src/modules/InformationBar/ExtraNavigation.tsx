import { Link } from "react-router-dom";

const ExtraNavigation = () => {
  return (
    <div className="grow flex flex-col space-y-4">
      <Link to="/" className="clickable-bg rounded-md text-center">
        Home
      </Link>
      <Link to="/aboutme" className="clickable-bg rounded-md text-center">
        About Me
      </Link>
      <Link to="/admin" className="clickable-bg rounded-md text-center">
        Admin
      </Link>
    </div>
  );
};

export default ExtraNavigation;

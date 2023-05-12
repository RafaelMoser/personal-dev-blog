import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";

type Props = {
  prevNanoId?: string;
  prevTitle?: string;
  nextNanoId?: string;
  nextTitle?: string;
};

const SingleArticleFooter = (props: Props) => {
  return (
    <IconContext.Provider value={{ size: "36px", color: "rgb(203 213 225)" }}>
      <div className="grid grid-cols-12 w-1/2 py-4 grow">
        {props.nextNanoId && (
          <NavLink
            to={`/article/${props.nextNanoId}`}
            className="bg-slate-800 rounded-full flex flex-row justify-start items-center col-start-1 col-span-4"
          >
            <FaAngleLeft />
            <div className="px-4 py-1">
              <div className="text-xs/3">Next article</div>
              <div className="text-lg">{props.nextTitle}</div>
            </div>
          </NavLink>
        )}

        <NavLink
          to="/"
          className="bg-slate-800 rounded-full flex flex-row text-white justify-center items-center col-start-6 col-span-2"
        >
          <FaHome />
        </NavLink>

        {props.prevNanoId && (
          <NavLink
            to={`/article/${props.prevNanoId}`}
            className="bg-slate-800 rounded-full flex flex-row text-white justify-end items-center col-start-9 col-span-4"
          >
            <div className="px-4">
              <div className="text-xs/3 text-right">Previous article</div>
              <div className="text-lg truncate">{props.prevTitle}</div>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </NavLink>
        )}
      </div>
    </IconContext.Provider>
  );
};

export default SingleArticleFooter;

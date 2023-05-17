import { Link } from "react-router-dom";
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
          <Link
            to={`/article/${props.nextNanoId}`}
            className="clickable-bg rounded-full flex flex-row justify-start items-center col-start-1 col-span-4 truncate"
          >
            <FaAngleLeft />
            <div className="px-4 py-1">
              <div className="text-xs/3">Next article</div>
              <div className="text-md">{props.nextTitle}</div>
            </div>
          </Link>
        )}

        <Link
          to="/"
          className="clickable-bg rounded-full flex flex-row text-white justify-center items-center col-start-6 col-span-2"
        >
          <FaHome />
        </Link>

        {props.prevNanoId && (
          <Link
            to={`/article/${props.prevNanoId}`}
            className="clickable-bg rounded-full flex flex-row justify-end items-center col-start-9 col-span-4 truncate"
          >
            <div className="px-4">
              <div className="text-xs/3 text-right">Previous article</div>
              <div className="text-md truncate">{props.prevTitle}</div>
            </div>
            <div>
              <FaAngleRight />
            </div>
          </Link>
        )}
      </div>
    </IconContext.Provider>
  );
};

export default SingleArticleFooter;

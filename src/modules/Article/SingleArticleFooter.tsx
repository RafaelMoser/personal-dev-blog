import { NavLink } from "react-router-dom";

type Props = {
  prevNanoId?: string;
  prevTitle?: string;
  nextNanoId?: string;
  nextTitle?: string;
};

const SingleArticleFooter = (props: Props) => {
  return (
    <div className="grid grid-cols-3 space-x-10">
      {props.nextNanoId && (
        <NavLink
          to={`/article/${props.nextNanoId}`}
          className="col-start-1 bg-slate-600 rounded-full flex flex-row text-white justify-center items-center h-10"
        >
          <div>Icon</div>
          <div>
            <div className="text-xs">Next article</div>
            <div className="text-sm">{props.nextTitle}</div>
          </div>
        </NavLink>
      )}
      <NavLink
        to="/"
        className="col-start-2 bg-slate-600 rounded-full flex flex-row text-white justify-center items-center h-10"
      >
        return to home
      </NavLink>

      {props.prevNanoId && (
        <NavLink
          to={`/article/${props.prevNanoId}`}
          className="col-start-3 bg-slate-600 rounded-full flex flex-row text-white justify-center items-center h-10"
        >
          <div>
            <div>Previous article</div>
            <div>{props.prevTitle}</div>
          </div>
          <div>Icon</div>
        </NavLink>
      )}
    </div>
  );
};

export default SingleArticleFooter;

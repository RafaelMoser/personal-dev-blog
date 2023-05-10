import { Link, NavLink } from "react-router-dom";

type Props = {
  pageCount: number;
  currentPage: number;
};

const PagePicker = (props: Props) => {
  let leftPagePicker = false;
  let rightPagePicker = false;

  const shouldRender = (page: number) => {
    return (
      page === 1 ||
      page === props.pageCount ||
      Math.abs(props.currentPage - page) <= 2
    );
  };
  const pageFooter: JSX.Element[] = [];

  if (props.currentPage !== 1) {
    pageFooter.push(
      <div
        key="prev"
        className="w-14 h-10 flex justify-center items-center 
    rounded-2xl bg-slate-700 shadow-inner shadow-slate-800"
      >
        <NavLink to={`/page/${props.currentPage - 1}`}>prev</NavLink>
      </div>
    );
  }

  for (let index = 1; index <= props.pageCount; index++) {
    if (index === props.currentPage) {
      pageFooter.push(
        <div
          className="w-12 h-12 flex justify-center items-center 
    rounded-full bg-slate-700 shadow-inner shadow-slate-800"
        >
          {index}
        </div>
      );
    } else if (shouldRender(index)) {
      pageFooter.push(
        <div
          key={index}
          className="w-10 h-10 flex justify-center items-center 
    rounded-xl bg-slate-700 shadow-inner shadow-slate-800"
        >
          <NavLink to={`/page/${index}`}>{index}</NavLink>
        </div>
      );
    } else if (index < props.currentPage && leftPagePicker) {
      //TODO push left picker
      leftPagePicker = true;
    } else if (index > props.currentPage && rightPagePicker) {
      //TODO push right picker
      rightPagePicker = true;
    }
  }
  if (props.currentPage !== props.pageCount) {
    pageFooter.push(
      <div
        key="next"
        className="w-14 h-10 flex justify-center items-center p-2
          rounded-xl bg-slate-700 shadow-inner shadow-slate-800"
      >
        <NavLink to={`/page/${props.currentPage + 1}`}>next</NavLink>
      </div>
    );
  }

  return (
    <div className="w-full h-14 flex flex-row justify-center items-center pb-8 space-x-4">
      {pageFooter}
    </div>
  );
};

export default PagePicker;

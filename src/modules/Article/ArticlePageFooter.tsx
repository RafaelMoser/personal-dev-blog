import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
  pageCount: number;
  currentPage: number;
};

const ArticlePageFooter = (props: Props) => {
  const navigate = useNavigate();
  let leftPagePicker = false;
  let rightPagePicker = false;

  const [leftInput, setLeftInput] = useState("...");
  const [rightInput, setRightInput] = useState("...");
  const [leftError, setLeftError] = useState(false);
  const [rightError, setRightError] = useState(false);

  const leftInputHandler = ({ target: { value } }: any) => {
    if (value === "") {
      setLeftInput("...");
    } else if (isNaN(value) || +value < 1 || +value > props.pageCount) {
      setLeftError(true);
      setTimeout(() => {
        setLeftError(false);
        setLeftInput("...");
      }, 1500);
    } else {
      navigate(`/page/${+value}`);
      setLeftInput("...");
    }
  };

  const rightInputHandler = ({ target: { value } }: any) => {
    if (value === "") {
      setRightInput("...");
    } else if (isNaN(value) || +value < 1 || +value > props.pageCount) {
      setRightError(true);
      setTimeout(() => {
        setRightError(false);
        setRightInput("...");
      }, 1500);
    } else {
      navigate(`/page/${+value}`);
      setRightInput("...");
    }
  };

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
    } else if (index < props.currentPage && !leftPagePicker) {
      pageFooter.push(
        <div
          key={index}
          className="w-10 h-10 flex justify-center items-center 
            rounded-xl bg-slate-700 shadow-inner shadow-slate-800"
        >
          <input
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)}
            onFocus={() => setLeftInput("")}
            onBlur={leftInputHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") leftInputHandler(e);
            }}
            className={`w-10 h-10 flex justify-center items-center text-center
            rounded-xl bg-slate-700 shadow-inner shadow-slate-800
            ${leftError ? "border-2 border-red-500" : ""}`}
          />
        </div>
      );
      leftPagePicker = true;
    } else if (index > props.currentPage && !rightPagePicker) {
      pageFooter.push(
        <div
          key={index}
          className="w-10 h-10 flex justify-center items-center 
            rounded-xl bg-slate-700 shadow-inner shadow-slate-800"
        >
          <input
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)}
            onFocus={() => setRightInput("")}
            onBlur={rightInputHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") rightInputHandler(e);
            }}
            className={`w-10 h-10 flex justify-center items-center text-center
            rounded-xl bg-slate-700 shadow-inner shadow-slate-800
            ${rightError ? "border-2 border-red-500" : ""}`}
          />
        </div>
      );
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

export default ArticlePageFooter;

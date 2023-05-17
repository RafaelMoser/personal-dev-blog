import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

type Props = {
  pageCount: number;
  currentPage: number;
};

const ArticleListFooter = (props: Props) => {
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
      setLeftInput("...");
      setTimeout(() => {
        setLeftError(false);
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
      setRightInput("...");
      setTimeout(() => {
        setRightError(false);
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
      <Link
        to={`/page/${props.currentPage - 1}`}
        key="prev"
        className="clickable-bg w-14 h-10 flex justify-center items-center rounded-2xl"
      >
        prev
      </Link>
    );
  }

  for (let index = 1; index <= props.pageCount; index++) {
    if (index === props.currentPage) {
      pageFooter.push(
        <div className="bg-slate-600 shadow-inner shadow-slate-800 w-12 h-12 flex justify-center items-center rounded-full">
          {index}
        </div>
      );
    } else if (shouldRender(index)) {
      pageFooter.push(
        <Link
          to={`/page/${index}`}
          key={index}
          className="clickable-bg w-10 h-10 flex justify-center items-center rounded-xl"
        >
          {index}
        </Link>
      );
    } else if (index < props.currentPage && !leftPagePicker) {
      pageFooter.push(
        <div
          key={index}
          className="clickable-bg w-10 h-10 flex justify-center items-center rounded-xl"
        >
          <input
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)}
            onFocus={() => setLeftInput("")}
            onBlur={leftInputHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") leftInputHandler(e);
            }}
            className={`clickable-bg w-10 h-10 flex justify-center items-center text-center rounded-xl
            ${leftError ? "border-2 border-red-500" : ""}`}
          />
        </div>
      );
      leftPagePicker = true;
    } else if (index > props.currentPage && !rightPagePicker) {
      pageFooter.push(
        <div
          key={index}
          className="clickable-bg w-10 h-10 flex justify-center items-center rounded-xl"
        >
          <input
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)}
            onFocus={() => setRightInput("")}
            onBlur={rightInputHandler}
            onKeyDown={(e) => {
              if (e.key === "Enter") rightInputHandler(e);
            }}
            className={`clickable-bg w-10 h-10 flex justify-center items-center text-center rounded-xl
            ${rightError ? "border-2 border-red-500" : ""}`}
          />
        </div>
      );
      rightPagePicker = true;
    }
  }
  if (props.currentPage !== props.pageCount) {
    pageFooter.push(
      <Link
        to={`/page/${props.currentPage + 1}`}
        key="next"
        className="clickable-bg w-14 h-10 flex justify-center items-center p-2 rounded-xl"
      >
        next
      </Link>
    );
  }

  return (
    <div className="w-full h-14 flex flex-row justify-center items-center pb-8 space-x-4">
      {pageFooter}
    </div>
  );
};

export default ArticleListFooter;

type Props = {
  pageCount: number;
  currentPage: number;
};

//
//[<][1][...][4][5](6)[7][8][...][12][>]

const PagePicker = (props: Props) => {
  let leftPagePicker = false;
  let rightPagePicker = false;

  const shouldRender = (page: number) => {
    return (
      page === 1 ||
      page === props.pageCount ||
      Math.abs(props.currentPage - page) < 2
    );
  };

  const pageFooter: JSX.Element[] = [];

  if (props.currentPage !== 1) {
    pageFooter.push(
      <div
        className="w-6 h-6 flex justify-center items-center 
    rounded-2xl bg-slate-700 shadow-inner shadow-slate-800"
      >
        prev
      </div>
    );
  }
  for (let index = 1; index <= props.pageCount; index++) {
    if (index === props.currentPage) {
      pageFooter.push(
        <div
          className="w-8 h-8 flex justify-center items-center 
    rounded-full bg-slate-700 shadow-inner shadow-slate-800"
        >
          {index}
        </div>
      );
    } else if (shouldRender(index)) {
      pageFooter.push(
        <div
          className="w-6 h-6 flex justify-center items-center 
    rounded-2xl bg-slate-700 shadow-inner shadow-slate-800"
        >
          {index}
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
        className="w-6 h-6 flex justify-center items-center 
    rounded-2xl bg-slate-700 shadow-inner shadow-slate-800"
      >
        next
      </div>
    );
  }

  return <div>{pageFooter}</div>;
};

export default PagePicker;

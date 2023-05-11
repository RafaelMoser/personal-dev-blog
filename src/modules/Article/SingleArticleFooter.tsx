type Props = {
  prevNanoId?: string;
  nextNanoId?: string;
};

const SingleArticleFooter = (props: Props) => {
  return (
    <div>
      {props.prevNanoId} SingleArticleFooter {props.nextNanoId}
    </div>
  );
};

export default SingleArticleFooter;

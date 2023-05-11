type Props = {
  prev?: string;
  next?: string;
};

const SingleArticleFooter = (props: Props) => {
  return (
    <div>
      {props.prev} SingleArticleFooter {props.next}
    </div>
  );
};

export default SingleArticleFooter;

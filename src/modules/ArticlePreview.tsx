type Props = { articleTitle: string; articleText: string };

const ArticlePreview = (props: Props) => {
  return (
    <div className="w-1/2 h-30 rounded-md shadow-2xl bg-slate-300 flex flex-col p-5">
      <h1 className="text-xl">This is a title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        suscipit libero cumque vero dignissimos nobis veritatis repellat
        consectetur deleniti expedita minus, blanditiis iste tempora nihil
        mollitia consequatur a, eaque reiciendis!
      </p>
    </div>
  );
};

export default ArticlePreview;

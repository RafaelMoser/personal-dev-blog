import ArticlePreview from "../modules/ArticlePreview";

const APREV = {
  title: "lorem of the ipsum",
  body:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dignissimos dolore ullam nulla," +
    " possimus, atque perferendis beatae facere dolor nisi eligendi quia iste ad quasi repudiandae nesciunt blanditiis vitae voluptas.",
};

const Index = () => {
  return (
    <div className="bg-white w-full h-full">
      <h1 className="text-5xl font-mono font-bold text-center py-10">
        PAGE TITLE
      </h1>
      <div className="flex flex-col space-y-8 items-center">
        <ArticlePreview articleTitle={APREV.title} articleText={APREV.body} />
        <ArticlePreview articleTitle={APREV.title} articleText={APREV.body} />
        <ArticlePreview articleTitle={APREV.title} articleText={APREV.body} />
      </div>
    </div>
  );
};

export default Index;

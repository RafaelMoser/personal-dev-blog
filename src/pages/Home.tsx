import ArticleContainer from "../modules/ArticleContainer";

const APREV = {
  title: "lorem of the ipsum",
  body:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dignissimos dolore ullam nulla," +
    " possimus, atque perferendis beatae facere dolor nisi eligendi quia iste ad quasi repudiandae nesciunt blanditiis vitae voluptas." +
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dignissimos dolore ullam nulla," +
    " possimus, atque perferendis beatae facere dolor nisi eligendi quia iste ad quasi repudiandae nesciunt blanditiis vitae voluptas." +
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, dignissimos dolore ullam nulla," +
    " possimus, atque perferendis beatae facere dolor nisi eligendi quia iste ad quasi repudiandae nesciunt blanditiis vitae voluptas.",
};

const Home = () => {
  return (
    <div className="bg-white w-full h-full">
      <h1 className="text-5xl font-mono font-bold text-center py-10">
        PAGE TITLE
      </h1>
      <div className="flex flex-col space-y-8 items-center">
        <ArticleContainer articleTitle={APREV.title} articleText={APREV.body} />
        <ArticleContainer articleTitle={APREV.title} articleText={APREV.body} />
        <ArticleContainer articleTitle={APREV.title} articleText={APREV.body} />
      </div>
    </div>
  );
};

export default Home;

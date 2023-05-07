import axios from "axios";
import { defer } from "react-router-dom";

export const loadArticles = async (page = 1) => {
  return await axios
    .get("http://localhost:5000/article/list/" + page)
    .then((res) => res.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const articlePageLoader = ({ params }: { params: any }) => {
  const page = parseInt(params.page) || 1;
  return defer({
    articles: loadArticles(page),
  });
};

export default articlePageLoader;

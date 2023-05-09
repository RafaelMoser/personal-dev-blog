import axios from "axios";
import { defer } from "react-router-dom";

const SERVER_URL = "http://localhost:5000/";

export const loadArticles = async (page = 1) => {
  return await axios
    .get(SERVER_URL + "article/list/" + page)
    .then((res) => res.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const articlePageLoader = ({ params }: { params: any }) => {
  const page = parseInt(params.page) || 1;
  return defer({
    articles: loadArticles(page),
  });
};

const infoBarLoader = async () => {
  return await axios.get(SERVER_URL + "aboutme/").then((res) => res.data);
};

export { articlePageLoader, infoBarLoader };
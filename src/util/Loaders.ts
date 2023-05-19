import axios from "axios";
import { defer } from "react-router-dom";

const SERVER_URL = "http://localhost:5000";

const loadArticles = async (page = 1) => {
  return await axios
    .get(`${SERVER_URL}/article/list/${page}`)
    .then((res) => res.data);
};

const loadPageCount = async () => {
  return await axios
    .get(`${SERVER_URL}/article/pageCount`)
    .then((res) => res.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const articlePageLoader = ({ params }: any) => {
  const page = parseInt(params.page) || 1;
  return defer({
    articles: loadArticles(page),
    pageCount: loadPageCount(),
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const singleArticleLoader = async ({ params: { nanoId } }: any) => {
  return await axios
    .get(`${SERVER_URL}/article/single/${nanoId}`)
    .then((res) => res.data);
};

const infoBarLoader = async () => {
  return defer({
    blogInfo: await axios
      .get(`${SERVER_URL}/blogInfo/`)
      .then((res) => res.data),
  });
};

const loginRequest = async (username: string, password: string) => {
  return await axios
    .post(`${SERVER_URL}/login/`, { username, password })
    .then((res) => res.data)
    .catch();
};

const blogUpdateDataLoader = async () => {
  return axios.get(`${SERVER_URL}/admin/profile`).then((res) => res.data);
};

export {
  loadArticles,
  articlePageLoader,
  infoBarLoader,
  singleArticleLoader,
  loginRequest,
  blogUpdateDataLoader,
};
import axios from "axios";
import { defer, json, redirect } from "react-router-dom";

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
  return await axios.get(`${SERVER_URL}/blogInfo/`).then((res) => res.data);
};

const loginRequest = async (username: string, password: string) => {
  return await axios
    .post(`${SERVER_URL}/login/`, { username, password })
    .then((res) => res.data)
    .catch();
};

const blogUpdateDataLoader = async () => {
  return await axios.get(`${SERVER_URL}/admin/profile`).then((res) => res.data);
};

const authLoader = () => {
  const authToken = localStorage.getItem("authToken");
  const hasToken = Boolean(authToken);
  return { authToken, hasToken };
};

const checkAuthLoader = () => {
  const { authToken, hasToken } = authLoader();
  if (!hasToken) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authToken;
};

export {
  loadArticles,
  articlePageLoader,
  infoBarLoader,
  singleArticleLoader,
  loginRequest,
  blogUpdateDataLoader,
  authLoader,
  checkAuthLoader,
};

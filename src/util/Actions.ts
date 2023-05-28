/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { redirect } from "react-router-dom";

const SERVER_URL = "http://localhost:5000";

const updateBlogInfoAction = async ({ request }: any) => {
  const data = await request.formData();
  const email = data.get("email").trim();
  const github = data.get("github").trim();
  const linkedin = data.get("linkedin").trim();
  const blogData = {
    blogTitle: data.get("blogTitle").trim(),
    profileImageUrl: data.get("profileImageUrl").trim(),
    infoBlurb: data.get("infoBlurb").trim(),
    aboutMe: data.get("aboutMe").trim(),
    ...(email && { email }),
    ...(github && { github }),
    ...(linkedin && { linkedin }),
  };
  if (!blogData.profileImageUrl || !blogData.infoBlurb || !blogData.aboutMe) {
    return "VALIDATION_ERROR";
  }
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  await axios
    .patch(`${SERVER_URL}/admin/profile`, blogData, config)
    .then((res) => res.data);

  return "SUCCESS";
};

const updateArticleAction = async ({ request, params }: any) => {
  const data = await request.formData();
  const articleData = {
    title: data.get("title"),
    articleBody: data.get("articleBody"),
  };

  if (!articleData.title || !articleData.articleBody) {
    return "VALIDATION_ERROR";
  }
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  await axios
    .patch(`${SERVER_URL}/article/single/${params.nanoId}`, articleData, config)
    .then((res) => res.data);

  return "SUCCESS";
};

const newArticleAction = async ({ request }: any) => {
  const data = await request.formData();
  const articleData = {
    title: data.get("title").trim(),
    articleBody: data.get("articleBody").trim(),
  };

  if (!articleData.title || !articleData.articleBody) {
    return "VALIDATION_ERROR";
  }
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  await axios
    .put(`${SERVER_URL}/article/new`, articleData, config)
    .then((res) => res.data);

  return "SUCCESS";
};

const sendLoginAction = async ({ request }: any) => {
  const data = await request.formData();
  const userData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  const response = await axios
    .post(`${SERVER_URL}/login`, userData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
    .catch();

  const tokenExpiration = new Date();
  tokenExpiration.setTime(tokenExpiration.getTime() + 10 * 60 * 1000);
  localStorage.setItem("accessToken", response.access_token);
  localStorage.setItem("refreshToken", response.refresh_token);
  localStorage.setItem("tokenExpiration", tokenExpiration.toISOString());
  return "SUCCESS";
};

const sendLogoutAction = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  await axios.post(`${SERVER_URL}/logout`, {}, config);
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("tokenExpiration");
  return redirect("/");
};

const refreshTokenAction = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
    },
  };
  const response = await axios
    .post(`${SERVER_URL}/refresh`, {}, config)
    .then((res) => res.data);
  const tokenExpiration = new Date();
  tokenExpiration.setHours(tokenExpiration.getHours() + 1);
  localStorage.setItem("accessToken", response.access_token);
  localStorage.setItem("tokenExpiration", tokenExpiration.toISOString());
  return "refresh";
};

export {
  newArticleAction,
  updateArticleAction,
  updateBlogInfoAction,
  sendLoginAction,
  refreshTokenAction,
  sendLogoutAction,
};

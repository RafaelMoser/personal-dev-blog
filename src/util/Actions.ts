/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { redirect } from "react-router-dom";

const SERVER_URL = "http://localhost:5000";

const updateBlogInfoAction = async ({ request }: any) => {
  const data = await request.formData();
  const email = data.get("email");
  const github = data.get("github");
  const linkedin = data.get("linkedin");
  const blogData = {
    profileImageUrl: data.get("profileImageUrl"),
    infoBlurb: data.get("infoBlurb"),
    aboutMe: data.get("aboutMe"),
    ...(email.trim() && { email }),
    ...(github.trim() && { github }),
    ...(linkedin.trim() && { linkedin }),
  };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  await axios
    .patch(`${SERVER_URL}/admin/profile`, blogData, config)
    .then((res) => res.data);

  return redirect("/admin");
};

const updateArticleAction = async ({ request, params }: any) => {
  const data = await request.formData();
  const blogData = {
    title: data.get("title"),
    articleBody: data.get("articleBody"),
  };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  await axios
    .patch(`${SERVER_URL}/article/single/${params.nanoId}`, blogData, config)
    .then((res) => res.data);

  return redirect("/admin");
};

const newArticleAction = async ({ request }: any) => {
  const data = await request.formData();
  const blogData = {
    title: data.get("title"),
    articleBody: data.get("articleBody"),
  };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  await axios
    .put(`${SERVER_URL}/article/new`, blogData, config)
    .then((res) => res.data);

  return redirect("/admin");
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
  return redirect("/");
};

const sendLogoutAction = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  await axios.put(`${SERVER_URL}/logout`, config).then((res) => res.data);
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
};

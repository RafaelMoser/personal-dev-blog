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

  //axios send
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
    .then((res) => res.data);

  localStorage.setItem("accessToken", response.access_token);
  localStorage.setItem("refreshToken", response.refresh_token);
  return redirect("/");
};

export { sendLoginAction };

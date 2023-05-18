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

  //axios send, get tokens back

  localStorage.setItem("authToken", "123");
  localStorage.setItem("authToken", "123");
};

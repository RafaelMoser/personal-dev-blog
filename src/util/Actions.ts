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

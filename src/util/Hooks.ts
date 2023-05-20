const useAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const hasToken = Boolean(accessToken);
  return { accessToken, hasToken };
};

export { useAccessToken };

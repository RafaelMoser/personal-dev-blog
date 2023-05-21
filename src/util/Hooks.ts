const useAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const hasToken = Boolean(accessToken);
  const refreshToken = localStorage.getItem("refreshToken");
  const tokenExpiration = new Date(
    localStorage.getItem("tokenExpiration") as string
  );
  const tokenDuration = tokenExpiration.getTime() - new Date().getTime();
  if (tokenDuration < 0) {
    return {
      accessToken: "EXPIRED",
      hasToken: false,
      refreshToken,
      tokenDuration,
    };
  }
  return { accessToken, hasToken, refreshToken, tokenDuration };
};

export { useAccessToken };

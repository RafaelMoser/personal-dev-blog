import { useState } from "react";

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [hasToken, setHasToken] = useState(
    accessToken && accessToken !== "EXPIRED"
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );
  const tokenExpiration = new Date(
    localStorage.getItem("tokenExpiration") as string
  );
  const [tokenDuration, setTokenExpiration] = useState(
    tokenExpiration.getTime() - new Date().getTime()
  );
  if (tokenDuration <= 0) {
    localStorage.setItem("accessToken", "EXPIRED");
    setAccessToken("EXPIRED");
    setHasToken(false);
  }
  return { accessToken, hasToken, refreshToken, tokenDuration };
};

export { useAccessToken };

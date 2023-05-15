import { createContext } from "react";

const AuthContext = createContext({
  accessToken: "",
});

export default AuthContext;

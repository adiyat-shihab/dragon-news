import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const CreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const info = { CreateUser };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

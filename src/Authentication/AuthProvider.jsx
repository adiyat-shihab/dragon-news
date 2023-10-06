import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is sign in", user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user is sign out");
      }
    });
  }, []);
  const CreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const info = { CreateUser, signinUser, user };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

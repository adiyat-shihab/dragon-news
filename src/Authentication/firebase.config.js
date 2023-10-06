import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqfhc4gyq3p9A1IpQuxFDfeRhiktErTiU",
  authDomain: "login-form-f4ee6.firebaseapp.com",
  projectId: "login-form-f4ee6",
  storageBucket: "login-form-f4ee6.appspot.com",
  messagingSenderId: "928440812589",
  appId: "1:928440812589:web:f36358d37f3a4e496ca4a4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

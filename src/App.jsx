import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./Authentication/AuthProvider";
import Navbar from "./Pages/Navbar";

function App() {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

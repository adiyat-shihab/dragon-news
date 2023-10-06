import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./Authentication/AuthProvider";

function App() {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <>
      <Link to={"/login"} className="btn btn-primary">
        Login
      </Link>
    </>
  );
}

export default App;

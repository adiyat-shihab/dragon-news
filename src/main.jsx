import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Routes/Routing.jsx";
import AuthProvider from "./Authentication/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Route />
    </AuthProvider>
  </React.StrictMode>
);

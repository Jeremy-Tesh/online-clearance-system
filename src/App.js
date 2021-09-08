import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import IndexRoute from "./routes";
import Signup from "./pages/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./routes/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <IndexRoute />
    </AuthProvider>
  );
}

export default App;

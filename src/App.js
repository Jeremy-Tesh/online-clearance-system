import React from "react";
import "./App.css";
import IndexRoute from "./routes";
import Property from "./components/property/property";
import Login from "./routes/Login";
import { AuthProvider } from "./contexts/AuthContext";
import AdminPage from "./routes/Admin";
import { ProgressBar } from "react-bootstrap";
import StudentPage from "./pages/StudentPage/StudentPage";

function App() {
  return <StudentPage />;
}

export default App;

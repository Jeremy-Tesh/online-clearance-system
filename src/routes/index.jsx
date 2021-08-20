import React, { useState, useEffect } from "react";
import AdminPage from "../pages/Admin-page/Admin-page";
import OfficerPage from "./Officer";
import StaffPage from "./Staff";
import StudentPage from "./Student";
import AuthRouter from "./Auth";
import { useAuth } from "../contexts/AuthContext";

const IndexRoute = () => {
  const {
    currentUser: { email },
  } = useAuth();

  const renderAppBasedOnRole = () => {
    switch (email) {
      case "none":
        return <StaffPage />;
      case "student":
        return <StudentPage />;
      case "officer":
        return <OfficerPage />;
      case "e@gmail.com":
        return <AdminPage />;
      default:
        return <AdminPage />;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;

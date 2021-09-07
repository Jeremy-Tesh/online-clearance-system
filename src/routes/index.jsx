import React, { useState } from "react";
import Officer from "./Officer";
import Staff from "./Staff";
import Student from "./Student";
import Admin from "./Admin";
import Layout from "../components/Layout/index";
import { useAuth } from "../contexts/AuthContext";

const IndexRoute = () => {
  const {
    userData: { role },
  } = useAuth();

  const renderAppBasedOnRole = () => {
    switch (role) {
      case "staff":
        return (
          <div>
            <Staff />
          </div>
        );
      case "student": {
        return (
          <div>
            <Student />
          </div>
        );
      }
      case "officer":
        return (
          <div>
            <Officer />
          </div>
        );
      default:
        return null;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;

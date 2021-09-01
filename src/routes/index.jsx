import React, { useState } from "react";
import Officer from "./Officer";
import Staff from "./Staff";
import Student from "./Student";
import Admin from "./Admin";
import Layout from "../components/Layout/index";
import { useAuth } from "../contexts/AuthContext";

const IndexRoute = () => {
  const {
    currentUser: { email },
  } = useAuth();
  const role = "";

  const renderAppBasedOnRole = () => {
    switch (email) {
      case "none":
        return (
          <div>
            role="staff"
            <Staff />
            <Layout role={role} />
          </div>
        );
      case "jermitesh20@gmail.com": {
        <Layout role="student" />;
        return (
          <div>
            <Student />
          </div>
        );
      }
      case "officer@officer.com":
        return (
          <div>
            <Officer />
            <Layout role="officer" />
          </div>
        );
      case "e@gmail.com":
        return <Officer />;
      default:
        return null;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;

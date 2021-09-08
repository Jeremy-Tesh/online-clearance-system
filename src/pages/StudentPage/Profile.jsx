import React, { useState, useEffect } from "react";
import Progress from "../../components/ProgressBar/Progress";
import "./Profile.css";

import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const {
    userData: { firstname, email, status, department },
  } = useAuth();

  return (
    <div className="profile_container">
      <div className="profile_sub">
        <div className="left_profile">
          <i className="fas fa-user fa-5x"></i>
          <h1>{firstname}</h1>
          <h2>{email}</h2>
        </div>
        <div className="right_profile">
          <Progress x={status} />
          <h2>current clearance office level</h2>
          <h3>{department}</h3>
        </div>
      </div>
    </div>
  );
};
export default Profile;

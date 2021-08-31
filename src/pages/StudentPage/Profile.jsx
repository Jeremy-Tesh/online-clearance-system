import React, { useState, useEffect } from "react";
import Progress from "../../components/ProgressBar/Progress";
import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/AuthContext";
import { db, firebaseDb } from "../../fire";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const fetchProfile = async () => {
    const response = db.collection("students");
    const data = await response.get();
    data.docs.forEach((item) => {
      setProfile([...profile, item.data()]);
    });
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Student name</h1>
      {profile &&
        profile.map((profile) => {
          return (
            <div>
              <h4>{profile.name}</h4>
              <h3>{profile.Id}</h3>
              <Progress x={profile.progress} />
              <h1>{profile.progress}</h1>
            </div>
          );
        })}
    </div>
  );
};
export default Profile;

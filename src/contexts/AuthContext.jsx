import React, { useContext, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { auth, db } from "../fire";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchCurrentUser();
  // }, []);

  function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  async function login(email, password) {
    // get user data from firebase
    fetchCurrentUser(email);
    return auth.signInWithEmailAndPassword(email, password);
  }
  async function fetchCurrentUser(email) {
    await db
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var data = doc.data();
          setUserData(data);
        });
      });
    setLoading(false);

    console.log(userData.role);
  }

  function logout() {
    console.log("logout in auth");
    auth.signOut();
    setUserData({});
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("auth state change");
      if (user) {
        fetchCurrentUser(user.email);
      } else {
        setCurrentUser(user);
        setLoading(false);
      }

      console.log(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    userData,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signUp,
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

import React, { useContext, useState, useEffect } from "react";
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
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function login(email, password) {
    // get user data from firebase
    fetchCurrentUser(email);
    return auth.signInWithEmailAndPassword(email, password);
  }
  function fetchCurrentUser(email) {
    db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var data = doc.data();
          setUserData(data);
        });
      });
    console.log(userData.role);
  }

  function logout() {
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
      setCurrentUser(user);
      setLoading(false);
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

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

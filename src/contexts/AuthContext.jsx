import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../fire";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = {
      name: "Ermi Teshome",
      role: "officer",
    };
    setUserData(user);
  }, []);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    // get user data from firebase

    auth.signInWithEmailAndPassword(email, password);
    return fetchCurrentUser(email);
  }
  function fetchCurrentUser(email) {
    var docRef = db.collection("users").where("email", "==", email);
    console.log(email);
    console.log(docRef);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function logout() {
    return auth.signOut();
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

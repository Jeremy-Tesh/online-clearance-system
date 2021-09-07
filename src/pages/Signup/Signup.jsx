import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";
// import "./Signup.css";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    db.collection("users").add({
      fname: fname,
    });

    try {
      await signUp(email, password);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="signup_con">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onSubmit={handleSubmit}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

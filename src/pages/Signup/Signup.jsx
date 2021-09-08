import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { auth, db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.css";

const SignUp = () => {
  const userData = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    department: "",
    password: "",
    role: "student",
    status: 30,
  };
  const [data, setData] = useState(userData);
  const { signUp } = useAuth();
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signUp(data.email, data.password);
      db.collection("users").add(data);
      alert("SUCCESSFUL");
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
              name="firstname"
              value={data.firstname}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Middle name</label>
            <input
              type="text"
              className="form-control"
              name="middlename"
              placeholder="Middle name"
              value={data.middlename}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Last name"
              value={data.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              placeholder="Department"
              value={data.department}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={data.password}
              onChange={handleInputChange}
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
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";
import Card from "react-bootstrap/Card";
import "./Signup.css";

const SignUp = () => {
  const userData = {
    id: "",
    fname: "",
    mname: "",
    lname: "",
    email: "",
    department: "",
    password: "",
    role: "",
    status: 0,
  };
  const [data, setData] = useState(userData);

  const { signUp } = useAuth();

  const handleInputChange = (e) => {
    //e.preventDefault();
    var { name, value } = e.target;
    console.log(value);
    setData({ ...data, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signUp(data.email, data.password);
      await db.collection("users").add(data);
      console.log(data);
      alert("SUCCESSFUL");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="signup_con">
      <div className="signup">
        <Card
          bg="light"
          style={{
            width: "100%",
            display: "flex",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="fname"
                  value={data.fname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Middle name</label>
                <input
                  type="text"
                  className="form-control"
                  name="mname"
                  placeholder="Middle name"
                  value={data.mname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Last name"
                  value={data.lname}
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
                <label>ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="ID"
                  value={data.id}
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
              <div className="form-group">
                <label>Role</label>
                <br></br>
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  onChange={handleInputChange}
                  checked={data.role === "student"}
                />
                  <label for="student">Student</label> {" "}
                <input
                  type="radio"
                  id="staff"
                  name="role"
                  value="staff"
                  onChange={handleInputChange}
                  checked={data.role === "staff"}
                />
                  <label for="staff">Staff</label>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-block"
                onSubmit={handleSubmit}
              >
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered <Link to="/login">sign in?</Link>
              </p>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default SignUp;

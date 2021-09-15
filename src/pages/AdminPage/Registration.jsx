import React, { useState } from "react";
import { db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";

const Registration = () => {
  const userData = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    office: "",
    password: "",
    role: "officer",
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
  console.log("im here");
  return (
    <div className="signup_con">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h3>Register officer</h3>

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
            <label>Office</label>
            <input
              type="text"
              className="form-control"
              name="office"
              placeholder="Office"
              value={data.office}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

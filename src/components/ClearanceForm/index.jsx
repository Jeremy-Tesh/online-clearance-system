import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./style.css";
import { db } from "../../fire";

const ClearanceForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mname, setMname] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("Ele");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("Not cleared");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("students")
      .add({
        fname: fname,
        lname: lname,
        mname: mname,
        id: id,
        email: email,
        department: department,
        section: section,
        year: year,
        college: college,
        reason: reason,
        status: status,
        office: "department",
      })
      .then(() => {
        alert("Form Submitted Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
    setFname("");
    setMname("");
    setLname("");
    setId("");
    setEmail("");
    setDepartment("");
    setSection("");
    setYear("");
    setStatus("Not cleared");
  };

  return (
    <div className="clearance_container">
      <div className="sub-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                value={mname}
                onChange={(e) => setMname(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label> College/School:</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                value={college}
                onChange={(e) => setCollege(e.currentTarget.value)}
              >
                <option value="Arc">
                  College of Architecture and Civil Engineering
                </option>
                <option value="Bio">
                  College Biological and Chemical Engineering
                </option>
                <option value="Ele">
                  College of Electrical and Mechanical Engineering
                </option>
                <option value="Soc">
                  College of Social and Natural Science
                </option>
                <option value="Applied">College of Applied Science</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Department</Form.Label>
              <Form.Control
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Section</Form.Label>
              <Form.Control
                placeholder="Section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Class Year</Form.Label>
              <Form.Control
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>ID</Form.Label>
              <Form.Control
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>Reason For Clearance</Form.Label>
            <Form.Label className="radio">
              <input
                value="one"
                checked={reason === "one"}
                type="radio"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
              Graduation
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "two"}
                value="two"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              End of Semester/Academic Year
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "three"}
                value="three"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              Withdrawal Personal Reason
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "four"}
                value="four"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              Withdrawal Academic Reason
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "five"}
                value="five"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              Forced Withdrawal
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "six"}
                value="six"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              Dropout
            </Form.Label>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default ClearanceForm;

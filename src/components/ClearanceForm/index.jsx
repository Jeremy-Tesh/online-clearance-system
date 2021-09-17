import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import "./style.css";
import { db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";

const ClearanceForm = () => {
  const {
    userData: { fname, mname, lname, email, id, role },
  } = useAuth();

  // if (role === "student") {
  //   setOffice("department");
  // } else if (role === "staff") setOffice("hr");
  // const  {
  //   office: "",
  // }=data

  // const roleBased = () => {
  //   switch (role) {
  //     case "student":
  //       data.office = "department";
  //       break;
  //     case "staff":
  //       data.office = "hr";
  //       break;
  //     default:
  //       setOff("null");
  //   }
  //   return roleBased;
  // };

  // useEffect(() => {
  //   roleBased();
  // }, []);

  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("Ele");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await db
      .collection("students")
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

    setDepartment("");
    setSection("");
    setYear("");
    setStatus(0);
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
                placeholder={fname}
                readonly="readonly"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={mname}
                readonly="readonly"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={lname}
                readonly="readonly"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={email}
                readonly="readonly"
              />
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
              <Form.Label>ID</Form.Label>
              <Form.Control type="id" placeholder={id} readonly="readonly" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Class Year</Form.Label>
              <Form.Control
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group as={Col}>
              <Form.Label>ID</Form.Label>
              <Form.Control
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group> */}
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
              <span></span>
              Graduation
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "two"}
                value="two"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              <span></span>
              End of Semester/Academic Year
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "three"}
                value="three"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              <span></span>
              Withdrawal Personal Reason
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "four"}
                value="four"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              <span></span>
              Withdrawal Academic Reason
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "five"}
                value="five"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              <span></span>
              Forced Withdrawal
            </Form.Label>
            <Form.Label>
              <input
                checked={reason === "six"}
                value="six"
                type="radio"
                onChange={(e) => setReason(e.target.value)}
              />
              <span></span>
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

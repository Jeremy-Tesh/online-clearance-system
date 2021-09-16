import React, { useState, useEffect } from "react";
import Progress from "../../components/ProgressBar/Progress";
import { Form, Card, Col, Row } from "react-bootstrap";
import avatar from "../../assets/icons/person-circle.svg";
import { db } from "../../fire";
import { Link } from "react-router-dom";
import "./Profile.css";

import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const {
    userData: { fname, mname, email, department, office, id },
  } = useAuth();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    await db
      .collection("students")

      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().email === email) setUserInfo(doc.data());
        });
      });
  }
  console.log(userInfo.status);
  return (
    <div className="profile_container">
      <div className="profile_sub">
        <Card bg="light">
          <div className="left_profile">
            <Card.Header></Card.Header>
            <Card.Body>
              <img
                src={avatar}
                alt="avatar"
                style={{ width: "100px", padding: "10px" }}
              />
              <Card.Title>Your details</Card.Title>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={fname}
                      value={fname + " " + mname}
                      readonly="readonly"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={email}
                      value={email}
                      readonly="readonly"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="col-md-6">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      value={department}
                      readonly="readonly"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="col-md-4">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={id} readonly="readonly" />
                  </Form.Group>
                </Row>
                <Row className="mb-3" style={{ paddingTop: "25px" }}>
                  <Form.Group className="col-md-4">
                    <Link to="/dashboard">Request clearance</Link>
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>
          </div>
        </Card>
        <Card bg="light">
          <div className="right_profile">
            <Card.Body>
              <Progress x={userInfo.status} />
              <h4>current clearance office level</h4>
              <h5>{office}</h5>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Profile;

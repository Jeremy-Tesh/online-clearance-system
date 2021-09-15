import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../fire";
import { Form, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
  const {
    userData: { fname, name, office, email },
  } = useAuth();
  return (
    <div>
      <div className="officer-header">
        <i className="fas fa-user fa-5x"></i>
        {/* <img src={avatar} alt="avatar" /> */}
      </div>
      <div>
        <h1>Your details</h1>

        <Card
          bg="light"
          style={{
            width: "100%",
            display: "flex",
            padding: "30px",
          }}
        >
          <Card.Header>
            <h1>Adminstration Office</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>Your details</Card.Title>
            <Form style={{ width: "50%" }}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={fname}
                    value={fname}
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
            </Form>
          </Card.Body>
        </Card>
        <br />
      </div>

      <h1>{office}</h1>

      <span>{email}</span>
    </div>
  );
};

export default Dashboard;

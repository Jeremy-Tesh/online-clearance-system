import React from "react";
import { useAuth } from "../../contexts/AuthContext";

import avatar from "../../assets/icons/person-circle.svg";
import Card from "react-bootstrap/Card";
import { Form, Button, Row, Col } from "react-bootstrap";

function Dashboard() {
  const {
    userData: { firstname, middlename, office, email },
  } = useAuth();

  return (
    <div>
      <div className="officer-header"></div>
      <div>
        {/* <input
          type="text"
          name="ClientName"
          value="YourValue"
          readonly="readonly"
        /> */}

        <Card
          bg="light"
          style={{
            width: "100%",
            display: "flex",
            padding: "30px",
          }}
        >
          <Card.Header>
            <h1>{office + " " + "office"}</h1>
          </Card.Header>
          <Card.Body>
            <img
              src={avatar}
              alt="avatar"
              style={{ width: "100px", padding: "10px" }}
            />
            <Card.Title>Your details</Card.Title>
            <Form style={{ width: "50%" }}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={firstname}
                    value={firstname + " " + middlename}
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
                  <Form.Label>Current office</Form.Label>
                  <Form.Control
                    type="text"
                    value={office}
                    readonly="readonly"
                  />
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default Dashboard;

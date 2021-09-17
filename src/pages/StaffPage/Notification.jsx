import React, { useEffect, useState } from "react";
import { Card, Button, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../../fire";
import { useAuth } from "../../contexts/AuthContext";

const Notification = () => {
  const {
    userData: { email },
  } = useAuth();
  const [status, setStatus] = useState({});

  const getNotification = async () => {
    await db
      .collection("students")
      .where("email", "==", email)
      .get()
      .then((q) => {
        q.docs.forEach((item) => {
          console.log(item.data());
          if (item.data().email === email) setStatus(item.data());
        });
      });
  };
  useEffect(() => {
    getNotification();
  }, []);
  console.log(status.office);
  if (status.office === "canceled") {
    return (
      <div style={{ padding: "90px" }}>
        <Card className="text-center" bg="light">
          <Card.Header>Notification</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Title></Card.Title>

            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
              }}
            >
              We are sorry that we are unable to process your request please
              contact the Admininstration office
            </Card.Text>

            <Button variant="danger">report</Button>
          </Card.Body>
          <Card.Footer className="text-muted">1 days ago</Card.Footer>
        </Card>
      </div>
    );
  } else if (status.status >= 100) {
    return (
      <div style={{ padding: "90px" }}>
        <Alert variant="success" style={{ padding: "60px" }}>
          <i
            className="fas fa-check-circle"
            size="lg"
            style={{ fontSize: "100px" }}
          ></i>
          <Alert.Heading>SUCCESS</Alert.Heading>
          <p>Your request was successfully approved!!!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link variant="outline-success" to="/">
              Profile
            </Link>
          </div>
        </Alert>
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: "100px",
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Alert variant="info" style={{ width: "100%", padding: "50px" }}>
          <div style={{ display: "flex", padding: "10px" }}>
            <Alert.Heading>Processsing...</Alert.Heading>
            <Spinner animation="grow" />
            <span></span>
            <Spinner animation="grow" />
            <span></span>
            <Spinner animation="grow" />
          </div>

          <p>Your order is being processed....</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link variant="outline-success" to="/">
              Profile
            </Link>
          </div>
        </Alert>
      </div>
    );
  }
};

export default Notification;

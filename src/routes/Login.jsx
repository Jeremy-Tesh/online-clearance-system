import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push("/IndexRoute");
    } catch (err) {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <Container
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "450px",
        flexDirection: "column",
      }}
    >
      <h3>AASTU Online Clearance</h3>
      <Card
        style={{
          width: "100%",
          display: "flex",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        <Card.Body>
          <h2 className="text mb-4">Log-in</h2>
          <Card.Header></Card.Header>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" style={{ paddingTop: "20px" }}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" style={{ paddingTop: "20px" }}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div style={{ paddingTop: "20px" }}>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/signup">Create New Account</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

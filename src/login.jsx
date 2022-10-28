import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Space2 from "./space-2";

function Login() {
  return (
    <div className="col-sm-10 offset-sm-3 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2 text-center">
      <Form className="form rounded bg-white shadow p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Continue with Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            className="typePhone"
            placeholder="Enter your mobile number"
          />
          <Form.Text className="text-muted">
            We'll send you a 6-digit code via SMS to verify your mobile number.
          </Form.Text>
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          SEND OTP
        </Button>
        <Space2 />
        <Form.Text className="text-muted">or login/signup using</Form.Text>
        <Space2 />
      </Form>
    </div>
  );
}

export default Login;

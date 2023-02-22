import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      navigate("/dashboard/overview");
    }     
  }, [])

  function handleLogin(e, email, password) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const config = {
      method: "post",
      url: import.meta.env.VITE_API_URI + "/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    if (email == "" || password == "") {
      alert("ingrese todos los datos");
      return;
    }
    axios(config)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/dashboard/overview");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="items formContainer">
      <Form className="authForm" onSubmit={(e) => handleLogin(e, email, password)}>
        <h3>Iniciar sesion</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            No se compartira tu correo con nadie
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};

export default Login;

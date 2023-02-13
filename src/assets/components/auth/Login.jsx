import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email,
      password,
    };
    const config = {
      method: "post",
      url: "https://bankdnc-backend.fly.dev/api/v1/auth/login",
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
        console.log(res.data.token);
        //sessionStorage.setItem("token", res.data.token);
        //navigate("/overview");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="items formContainer">
      <Form className="authForm" onSubmit={handleLogin}>
        <h3>Iniciar sesion</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
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

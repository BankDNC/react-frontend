import axios from "axios";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function register() {

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      navigate("/dashboard");
    }
  }, []);

  function handleRegister(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    const dni = e.target.dni.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const data = {
      name,
      lastName,
      dni,
      email,
      password,
      phone,
    };
    const config = {
      method: "post",
      url: import.meta.env.VITE_API_URI + "/auth/register",
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
        console.log(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="items formContainer registerForm">
      <Form className="authForm " onSubmit={handleRegister}>
        <h3>Registrarse</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" placeholder="Ingrese Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Ingrese Apellido"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numero Documento</Form.Label>
          <Form.Control
            type="text"
            name="dni"
            placeholder="Ingrese Documento"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingrese Correo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirma Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirme Contraseña"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numero Telefonico</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Ingrese Numero Telefonico"
          />
        </Form.Group>

        <Button variant="primary" className="mb-5" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

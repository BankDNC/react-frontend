import React from "react";
import Login from "./Login";
import Register from "./Register";
import {
  Routes,
  Route,
} from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="authContainer">
      <div className="items bankInfo">
        <img className="bankImg" src="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg" alt="bankLogo" />
      </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
};

export default AuthPage;

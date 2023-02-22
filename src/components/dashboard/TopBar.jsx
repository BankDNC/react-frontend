import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router";

export default function TopBar() {
  const navigate = useNavigate();
  const decodedPayload = useJwt(sessionStorage.getItem("token"));

  useEffect(() => {
    if (decodedPayload.decodedToken === null) {
      return;
    }
  }, [decodedPayload]);

  function closeSession() {
    sessionStorage.clear();
    navigate("/auth/login");
  }

  if (decodedPayload.decodedToken === null) {
    return;
  } else
    return (
      <div className="topBar">
        <div className="userInfo">
          <div className="userLogo">
            {decodedPayload.decodedToken.name.charAt(0).toUpperCase()
              + decodedPayload.decodedToken.lastName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="userName">
              
              {decodedPayload.decodedToken.name +
                " " +
                decodedPayload.decodedToken.lastName}
            </div>
            <button className="closeSession" onClick={closeSession}>
              Cerrar Sesion
            </button>
          </div>
        </div>
      </div>
    );
}

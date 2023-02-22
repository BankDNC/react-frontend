import React, { useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Overview from "./Overview";
import Transactions from "./Transactions";

import TopBar from "./TopBar";

export default function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      navigate("/auth/login");
    } 
  }, []);

  return (
    <div className="appContainer">
      <aside className="sideBar">
        <img
          className="bankLogo"
          src="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg"
          alt="bankImg"
        />
        <nav>
          <ul>
            <li>
              <NavLink to="./overview">Vista General</NavLink>
            </li>
            <li>
              <NavLink to="./transactions">Transacciones</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="clientInfo">
        <TopBar />
        <div className="content">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

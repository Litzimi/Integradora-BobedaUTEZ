import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminPrincipal from "./assets/screens/AdminPrincipal";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/AdminPrincipal");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <div className="izquierda">
              <img className="imagenPrincipal" src="/img/Logo_Bobeda_Cajas.png" alt="Logo" />
            </div>
            <div className="derecha">
              <form onSubmit={handleLogin}>
                <img className="logo" src="/img/Logo_Bobeda.png" alt="Logo" />
                <p>Boveda UTEZ</p>
                <h3>Iniciar sesión</h3>
                <p>Usuario:</p>
                <input type="text" name="username" placeholder="Correo Electrónico" />
                <p>Contraseña:</p>
                <input type="password" name="password" placeholder="Contraseña" />
                <button type="submit">Iniciar sesión</button>
              </form>
            </div>
          </div>
        }
      />
      <Route path="/AdminPrincipal" element={<AdminPrincipal />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import LoginScreen from "./assets/screens/LoginScreen";
import AdminPrincipal from "./assets/screens/AdminPrincipal";
import RecursosScreenAdmin from "./assets/screens/RecursosScreenAdmin";

function App() {
  console.log("App está renderizando...");

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/AdminPrincipal" element={<AdminPrincipal />} />
      <Route path="/Recursos" element={<RecursosScreenAdmin />} />
    </Routes>
  );
}

export default App;
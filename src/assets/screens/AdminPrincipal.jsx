import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function AdminPrincipal() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ver inventarios</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Ver Catalogos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Recursos</a></li>
                  <li><a className="dropdown-item" href="#">Edificios</a></li>
                  <li><a className="dropdown-item" href="#">Usuarios</a></li>
                  <li><a className="dropdown-item" href="#">Tipos de recursos</a></li>
                  <li><a className="dropdown-item" href="#">Responsables</a></li>
                  <li><a className="dropdown-item" href="#">Tipo de espacio</a></li>
                  <li><a className="dropdown-item" href="#">Inventarios levantados</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cuenta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cerrar sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminPrincipal;

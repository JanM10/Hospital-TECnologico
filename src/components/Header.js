import React from "react";
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import '../styles/Header.css'

function header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Crear_cuenta">Crear_cuenta</Link></li>
          <li><Link to="/Reservacion">Reservación</Link></li>
          <li><Link to="/Historial_medico">Historial Médico</Link></li>
          <li><Link to="/">Cerrar</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header;
import React from "react";
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import HeaderCSS from '../styles/Header.module.css';

function header() {
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className={HeaderCSS.nav_links}>
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
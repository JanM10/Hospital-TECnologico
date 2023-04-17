import { useRef } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/Paciente'>Paciente</Link>
                <Link to='/Reservacion'>Reservación</Link>
                <Link to='/Historial_Medico'>Historial Médico</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
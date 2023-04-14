import { useRef } from "react";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Paciente'>Paciente</Link>
                <Link to='/Reservacion'>Reservacion</Link>
                <Link to='/Historial_Medico'>Historial_Medico</Link>
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
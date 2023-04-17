import React from "react";
import '../styles/loginform.css'

function login() {
    var user, password;

    user = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (user === "Administrador" && password === "12345") {
        window.location = "Paciente"
    } else {
        alert("Usuario o contraseña incorrectos");
    }

}

const Loginform = () => {

    return (
        <div className="page"> 
            <div className="cover">
                <h1>Login</h1>
                <input id="username" className="input" type="text" placeholder="Usuario"  />
                <input id="password" className="input" type="password" placeholder="Contraseña"  />

                <div className="login_btn" onClick={login}>Login</div>

            </div>
        </div>
    )
}

export default Loginform;
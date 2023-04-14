import React from "react";
import '../styles/loginform.css'

const Loginform = () => {

    return (
        <div className="page"> 
            <div className="cover">
                <h1>Login</h1>
                <input className="input" type="text" placeholder="Username" />
                <input className="input" type="password" placeholder="Password" />

                <div className="login_btn">Login</div>

            </div>
        </div>
    )
}

export default Loginform;
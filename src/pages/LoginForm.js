import React from "react";
import Login from "../styles/loginform.module.css"
import { Navigate, useNavigate } from "react-router-dom";

const Loginform = () => {

    return (
        <div className={Login.page}>
            <div className={Login.cover}>
                <h1>Login</h1>
                <input className={Login.input} type="text" placeholder="Username" />
                <input className={Login.input} type="password" placeholder="Password" />

                <div className={Login.login_btn} >Login</div>

            </div>
        </div>
    )
}

export default Loginform;
import React from "react";
import s from "./Header.module.css"
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.login__block}>
                {props.isLogin 
                ? <div>
                {props.login}
                <button onClick={props.logoutProcess}>Logout</button>
                </div>
                : <NavLink  to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header
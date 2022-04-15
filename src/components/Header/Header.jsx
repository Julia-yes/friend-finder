import React, {useState} from "react";
import s from "./Header.module.css"
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    let [windowState, setWindowState] = useState(false);
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.login__block}>
                {props.isLogin 
                ? <div>
                    <button className={s.login__block__button} onClick = {() => {setWindowState(!windowState)}}>
                        {props.profile
                        ? <img className={s.userLink} src={props.profile.photos.large}></img>
                        : <img className={s.userLink} src="/ava.jpg"></img>}
                    </button> 
                    <ModalUserLink isOpenModal = {windowState} />                   
                </div>
                : <NavLink  to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header

const ModalUserLink = (props) => {    
    return (
        <div>
            {props.isOpenModal ? 
                <ul className={s.modalWindow} >
                    <li onClick={props.logoutProcess}>Change profile</li> 
                    <li onClick={props.logoutProcess}>Log out</li>
                </ul>
            : null}
        </div>
        
    )
}
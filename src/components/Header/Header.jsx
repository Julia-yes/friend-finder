import React, {useState} from "react";
import s from "./Header.module.css"
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    let [windowState, setWindowState] = useState(false);
    let changeVisibilityModalWindow = () => {setWindowState(!windowState)}
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.login__block}>
                {props.isLogin 
                ? <div>
                    <button className={s.login__block__button} onClick = {changeVisibilityModalWindow}>
                        {props.profile
                        ? <img className={s.userLink} src={props.profile.photos.large}></img>
                        : <img className={s.userLink} src="/ava.jpg"></img>}
                    </button> 
                    <ModalUserLink isOpenModal = {windowState}  logoutProcess = {props.logoutProcess} changeVisibilityModalWindow/>                   
                </div>
                : <NavLink  to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header

const ModalUserLink = (props) => {    
    return (
        <div className={s.modalWindowArea}>
            {props.isOpenModal ? 
                <ul className={s.modalWindow} >                     
                    <li><NavLink to={"/profile-edit"}>Change profile</NavLink></li>
                    <li onClick={props.logoutProcess}>Log out</li>
                </ul>
            : null}
        </div>
        
    )
}
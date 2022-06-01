import React, {useState} from "react";
import s from "./Header.module.css";
import c from "../Common/Common.module.css";
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    let [windowState, setWindowState] = useState(false);
    let changeVisibilityModalWindow = () => {setWindowState(!windowState)};
    const btnMenu = document.getElementById('open_modalWindow');
    const modalWindow = document.getElementById('modalWindow');
    btnMenu?.addEventListener('click', function(e) {
        e.stopPropagation();
        changeVisibilityModalWindow();
    });
    document.addEventListener('click', function(e) {
        const target = e.target;
        const its_modalWindow = target == modalWindow || modalWindow?.contains(target);
        const its_btnMenu = target == btnMenu;        
        if (!its_modalWindow && !its_btnMenu && windowState) {
            changeVisibilityModalWindow();
        }
    });

    return (
        <header className={s.header}>
            <div className={c.wrapper}>
                <div className={s.header__area}>
                    <img src={logo} alt="logo" />
                    <div className={s.login__block}>
                        {props.isLogin 
                        ? <div>
                            <button className={s.login__block__button} onClick = {changeVisibilityModalWindow} > 
                                {props.profile
                                ? <img className={s.userLink} src={props.profile.photos.large} id="open_modalWindow"></img>
                                : <img className={s.userLink} src="/ava.jpg"></img>}
                            </button> 
                            <ModalUserLink isOpenModal = {windowState}  logoutProcess = {props.logoutProcess} />                   
                        </div>
                        : <NavLink  to={"/login"}>Login</NavLink> }
                    </div>
                </div>                
            </div>
            
        </header>
    )
}

export default Header

const ModalUserLink = (props) => {    
    return (
        <div className={s.modalWindowArea} id="modalWindow">
            {props.isOpenModal ? 
                <ul className={s.modalWindow} >                     
                    <li><NavLink to={"/profile-edit"}>Change profile</NavLink></li>
                    <li onClick={props.logoutProcess}>Log out</li>
                </ul>
            : null}
        </div>
        
    )
}
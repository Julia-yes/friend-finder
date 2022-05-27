import React from "react";
import s from "./Navbar.module.css";
import user from "../../images/user.png";
import news from "../../images/news.png";
import music from "../../images/music.png";
import chat from "../../images/chat.png";
import friends from "../../images/friends.png";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__menu}>
                <li><img src={user} className={s.nav__logo} /><NavLink to="/profile/21738" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Profile</NavLink></li>
                <li><img src={friends}  className={s.nav__logo}/><NavLink to="/people" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>People</NavLink></li>
                <li><img src={chat} className={s.nav__logo} /><NavLink to="/messages" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Messages</NavLink></li>
                <li><img src={news} className={s.nav__logo} /><NavLink to="/news" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>News</NavLink></li>
                <li><img src={music} className={s.nav__logo} /><NavLink to="/music" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Music</NavLink></li>                
            </ul>
        </nav>
    )
};

export default Navbar
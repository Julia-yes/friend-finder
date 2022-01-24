import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__menu}>
                <li><NavLink to="/profile/21738" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Profile</NavLink></li>
                <li><NavLink to="/people" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>People</NavLink></li>
                <li><NavLink to="/messages" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Messages</NavLink></li>
                <li><NavLink to="/news" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>News</NavLink></li>
                <li><NavLink to="/music" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Music</NavLink></li>
                <li><NavLink to="/settings" style={col => ({
                    color: col.isActive ? "#27aae1" : "#6d6e71"
                })}>Sattings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar
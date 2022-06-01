import React from "react";
import s from "./Footer.module.css";
import c from "../Common/Common.module.css";
import fb from '../../images/fb.png';
import tw from '../../images/tw.png';
import insta from '../../images/insta.png';
import tg from '../../images/tg.png';
import vk from '../../images/vk.png';
import phone from '../../images/phone.png';
import mail from '../../images/mail.png';
import location from '../../images/location.png';

const Footer = (props) => {
    return (
        <footer >
            <div className={c.wrapper}>
                <div className={s.footer}>
                    <div className={s.footer__logos}>
                        <img className={s.footer__logo} src="https://themified.com/friend-finder/images/logo-black.png"></img>
                        <div className={s.footer__socialLogos} >
                            <img src={fb} className={s.social__logo}></img>
                            <img src={tw} className={s.social__logo}></img>
                            <img src={insta} className={s.social__logo}></img>
                            <img src={tg} className={s.social__logo}></img>
                            <img src={vk} className={s.social__logo}></img>
                        </div>
                    </div>
                    <div className={s.footer__information}>
                        <ul className={s.information}> <div className={s.header__section}>Our information</div>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                            <li>Terms</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className={s.footer__contacts}>
                        <ul className={s.contacts}> <div className={s.header__section}>Contact us</div>
                            <li>
                                <img src={phone} className={s.contacts__icon}></img>
                                <span>+ 123 45 678 90 12</span>
                            </li>
                            <li>
                                <img src={mail} className={s.contacts__icon}></img>
                                <span>info@thunder-team.com</span>
                            </li>
                            <li>
                                <img src={location} className={s.contacts__icon}></img>
                                <span>228 Park Ave S NY, USA</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer

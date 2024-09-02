import React, { useState, useEffect } from "react";
import './Footer.css'
import DarkLogo from "../../Assets/DarkLogoTheme.png";
import LightLogo from "../../Assets/LogoLight.png"
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    const [hide, setHide] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true);
    const changeToDarkTheme = () => {
        setHide(!hide)
        setIsDarkMode(true);
    }

    const changeToLightTheme = () => {
        setHide(!hide)
        setIsDarkMode(false);
    }
  return (
    <div>
        <div className='footer-container'>
            <div className='footer-datas-container'>
                <div className='footer-first-container'>
                    <img className="nav-logo" src={isDarkMode ? DarkLogo : LightLogo} alt="Logo" />
                    <p>Unlock e-commerce intricacies with our advanced crawling solutions for a competitive boost.</p>
                    <p className='contact'>contact</p>
                    <a className='contact-mail' href="">support@enbotsolutions.com</a>
                </div>
                <div className='footer-second-child'>
                    <div className='footer-first-container'>
                        <h2 className=''>Quick Links</h2>
                        <a  href="">Home</a>
                        <a  href="">Services</a>
                        <a  href="">About Us</a>
                        <a  href="">Products</a>
                    </div>
                    <div className='footer-first-container'>
                        <h2 className=''>Support</h2>
                        <a href="">Contact Us</a>
                    </div>
                    <div className='footer-first-container'>
                        <h2 className=''>Newsletter</h2>
                        <p className='footer-content'>Subscribe to receive future updates</p>
                        <div className='foter-input-container'>
                            <input type="email" placeholder='Email Address'/>
                            <button><VscSend /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='enbot-social-details'>
                <div className='last-footer-container'>
                    <a href="">English</a>
                    <a href="">Privacy Policy </a>
                    <a href="">Support</a>
                </div>
                <p className='footer-p'>© 2024 ENBOT Solutions. All rights reserved</p>
                <div className='footer-icons'>
                    <FaFacebookF className='f-icons'/>
                    <FaTwitter className='f-icons'/>
                    <FaLinkedinIn className='f-icons'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
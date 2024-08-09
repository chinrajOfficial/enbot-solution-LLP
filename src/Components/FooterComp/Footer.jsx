import React from 'react'
import './Footer.css'
import FooterLogo from '../../Assets/Logo.png'
import { VscSend } from "react-icons/vsc";
const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <div className='footer-datas-container'>
                <div className='footer-first-container'>
                    <img src={FooterLogo} alt="" />
                    <p className='footer-content'>Unlock e-commerce intricacies with our advanced crawling solutions for a competitive boost.</p>
                    <p className='contact'>contact</p>
                    <a href="">support@datamindnexussolutions.onmicrosoft.com</a>
                </div>
                <div className='footer-second-container'>
                    <h2 className=''>Quick Links</h2>
                    <a href="">Home</a>
                    <a href="">Services</a>
                    <a href="">About Us</a>
                    <a href="">Products</a>
                </div>
                <div className='footer-third-container'>
                    <h2 className=''>Support</h2>
                    <a href="">Home</a>
                </div>
                <div className='footer-last-container'>
                    <h2 className=''>Newsletter</h2>
                    <p>Subscribe to receive future updates</p>
                    <div>
                        <input type="email" placeholder='Email Address'/>
                        <button><VscSend /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
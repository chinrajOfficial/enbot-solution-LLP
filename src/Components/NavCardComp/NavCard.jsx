import React from 'react';
import './NavCard.css';
import Logo from '../../Assets/LogoLight.png'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { Link as ScrollLink, Element } from "react-scroll";
import { SiPlatformio } from "react-icons/si";
const SCROLL_DURATION = 1000;
// import Main from '../MainComp/Main';
const NavCard = () => {
  return (
    <div className='NavCard'>

          {/* <ScrollLink className="footer-menus" to="services" spy={true} smooth={true} duration={200}>Services</ScrollLink>
          <ScrollLink className="footer-menus" to="about" spy={true} smooth={true} duration={400}>About Us</ScrollLink>
          <ScrollLink className="footer-menus" to="products" spy={true} smooth={true} duration={600}>Products</ScrollLink>
          <ScrollLink className="footer-menus" to="contact" spy={true} smooth={true} duration={SCROLL_DURATION}>Contact Us</ScrollLink> */}


        <ul className='NavList'>
        {/* <img className='LogoImg' src={Logo} alt='Logo' /> */}
            <li className='NavItem TopSpace'>
                <IoHomeOutline className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="home" spy={true} smooth={true} duration={SCROLL_DURATION}>Home</ScrollLink>
            </li>
            <li className='NavItem'>
                <MdOutlineMiscellaneousServices className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="services" spy={true} smooth={true} duration={200}>Services</ScrollLink>
            </li>
            <li className='NavItem'>
                <LiaBookSolid className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="about" spy={true} smooth={true} duration={400}>About</ScrollLink>
            </li>
            <li className='NavItem'>
                <AiOutlineProduct className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="products" spy={true} smooth={true} duration={600}>Products</ScrollLink>
            </li>
            <li className='NavItem'>
                <RiContactsLine className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="contact" spy={true} smooth={true} duration={SCROLL_DURATION}>Contact Us</ScrollLink>
            </li>
        </ul>
        <div className='SocialMedia'>
            {/* <button className='NavButton'>Button</button> */}
            <button className="NavButton"><SiPlatformio /> Enquiry</button>
        </div>
    </div>
  );
}

export default NavCard;

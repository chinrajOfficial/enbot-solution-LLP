import React, { useState, useEffect } from "react";
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
const NavCard = ({setIsCloseIc, isCloseIc}) => {
  const changeMenuView = () => {
    setIsCloseIc(!isCloseIc)
    var navBar = document.getElementById('mobile-nav')
    navBar.style.right = '-100%';
    navBar.style.transition = '.5s ease-in';
  }
  return (
    <div className='NavCard'>
       <ul className='NavList'>
            <li  onClick={changeMenuView} className='NavItem TopSpace'>
                <IoHomeOutline onClick={changeMenuView} className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="home" spy={true} smooth={true} duration={SCROLL_DURATION} onClick={changeMenuView}>Home</ScrollLink>
            </li>
            <li className='NavItem'>
                <MdOutlineMiscellaneousServices className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="services" spy={true} smooth={true} duration={200} onClick={changeMenuView}>Services</ScrollLink>
            </li>
            <li className='NavItem'>
                <LiaBookSolid className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="about" spy={true} smooth={true} duration={400} onClick={changeMenuView}>About</ScrollLink>
            </li>
            <li className='NavItem'>
                <AiOutlineProduct className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="products" spy={true} smooth={true} duration={600} onClick={changeMenuView}>Products</ScrollLink>
            </li>
            <li className='NavItem'>
                <RiContactsLine className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="contact" spy={true} smooth={true} duration={SCROLL_DURATION} onClick={changeMenuView}>Contact Us</ScrollLink>
            </li>
        </ul>
    </div>
  );
}

export default NavCard;

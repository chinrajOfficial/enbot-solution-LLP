import React from 'react';
import './NavCard.css';
import Logo from '../../Assets/LogoLight.png'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
// import Main from '../MainComp/Main';
const NavCard = () => {
  return (
    <div className='NavCard'>
        <ul className='NavList'>
        <img className='LogoImg' src={Logo} alt='Logo' />
            <li className='NavItem TopSpace'>
                <IoHomeOutline className='NavMenuIcon'/>
                <a className='NavMenu' href='/home'>Home</a>
            </li>
            <li className='NavItem'>
                <MdOutlineMiscellaneousServices className='NavMenuIcon'/>
                <a className='NavMenu' href='/services'>Services</a>
            </li>
            <li className='NavItem'>
                <LiaBookSolid className='NavMenuIcon'/>
                <a className='NavMenu' href='/about'>About</a>
                </li>
            <li className='NavItem'>
                <AiOutlineProduct className='NavMenuIcon'/>
                <a className='NavMenu' href='/products'>Products</a>
            </li>
            <li className='NavItem'>
                <RiContactsLine className='NavMenuIcon'/>
                <a className='NavMenu' href='/contact'>Contact</a>
            </li>
        </ul>
        <div className='SocialMedia'>
            <button className='NavButton'>Button</button>
        </div>
    </div>
  );
}

export default NavCard;

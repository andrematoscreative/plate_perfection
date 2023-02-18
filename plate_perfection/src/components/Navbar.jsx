import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import {HiOutlineShoppingCart} from "react-icons/hi";
import { motion } from 'framer-motion';
import { images } from '../constants';
import navbar from './navbar.scss';

const Navbar = ({active}) => {
    const[toggle, setToggle] = useState(false);

  return (
    
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <a href={`Home}`}>
                <img src={images.logo} alt="logo" />
            </a>
        </div>

        <ul className='app__navbar-links'>
            {['Home', 'Menu', 'Contact', 'Cart'].map((item) => (
                
                <li className='app__flex p-text' key={`link-${item}`}>
                    
                    <a href={`#${item}`}>{item}</a>
                    {item === 'Cart' && <a href="/Cart"><HiOutlineShoppingCart className='cart-icon' /></a>}
                </li>
            ))}
        </ul>

        
        
        <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)}/>
            { toggle && (
                <motion.div className='container'
                whileInView = {{ x: [300, 0] }} transition = {{ duration: 0.6, ease: 'easeOut'}}>
                    <SlClose onClick={() => setToggle(false)}/>
                    <ul>
                    <img src={images.logo} alt="logo" />
                    <div className='line1'/>
                    
                    {['Home', 'Menu', 'Contact', 'Cart'].map((item) => (
                        <li key= {item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                    ))}
                    
                    <div className='line2'/>
                    </ul>
                </motion.div>
            )}
        </div>
        <div className='line'/>
    </nav>
    )
}

export default Navbar
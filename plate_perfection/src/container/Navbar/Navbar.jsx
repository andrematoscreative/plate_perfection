/*import React, { useState } from 'react'
import { SlClose } from 'react-icons/sl';
import { HiMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { motion } from 'framer-motion';
import { images } from '../constants';
import './navbar.scss';

const Navbar = ({active}) => {
    const[toggle, setToggle] = useState(false);

  return (
    
    <nav className='app__navbar'>
        <div className='app__master-container app__navbar-all'>
        <div className='app__navbar-logo'>
            <a href={`Home}`}>
                <img src={images.logo} alt="logo" />
            </a>
        </div>

        <ul className='app__navbar-links'>
            {['Home', 'Menu', 'Contact', "Cart"].map((item) => (
                
                <li className='app__flex p-text' key={`link-${item}`}>
                    
                    <a href={`#${item}`}>{item}</a>
                    {item === 'Cart' && <a href="/Cart"><HiOutlineShoppingCart className='cart-icon' /></a>}
                </li>
            ))}
        </ul>

        
        
        <div className='app__navbar-hamburguermenu'>
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
        </div>
    </nav>
    )
}

export default Navbar;*/

import React, { useState, useEffect } from 'react';
import { SlClose } from 'react-icons/sl';
import { HiMenu, HiOutlineShoppingCart } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Link, useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './navbar.scss';

const Navbar = ({ active }) => {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
      if (location.hash) {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    }, [location]);

  
    return (
      <nav className='app__navbar'>
        <div className='app__master-container app__navbar-all'>
          <div className='app__navbar-logo'>
            <Link to='/#home'>
              <img src={images.logo} alt='logo plate perfection' />
            </Link>
          </div>

          <ul className='app__navbar-links'>
            <li className={`app__flex p-text ${active === 'Home' ? 'active' : ''}`}>
              <Link to='/#home'>Home</Link>
            </li>
            <li className={`app__flex p-text ${active === 'Menu' ? 'active' : ''}`}>
              <Link to='/#menu'>Menu</Link>
            </li>
            <li className={`app__flex p-text ${active === 'Contact' ? 'active' : ''}`}>
              <Link to='/#Contact'>Contact</Link>
            </li>
            <li className='app__flex p-text' key={`link-cart`}>
                <Cart/>
            </li>
          </ul>

          <div className='app__navbar-hamburguermenu'>
            <HiMenu onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                className='container'
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <SlClose onClick={() => setToggle(false)} />
                <ul>
                  <img src={images.logo} alt='logo' />
                  <div className='line1' />
  
                  <li>
                    <Link to='/Home' onClick={() => { setToggle(false); }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/Menu' onClick={() => { setToggle(false); }}>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to='/Contact' onClick={() => { setToggle(false); }}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to='/Cart' onClick={() => { setToggle(false); }}>
                      Cart <HiOutlineShoppingCart className='cart-icon' />
                    </Link>
                  </li>

                  <div className='line2' />
                </ul>
              </motion.div>
            )}
          </div>
          <div className='line' />
        </div>
      </nav>
    );
};

export default Navbar;

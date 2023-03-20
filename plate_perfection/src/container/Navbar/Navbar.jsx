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
          <div>
            <Link to='/#home'>
              <img className='app__navbar-logo' src={images.plate_perfection_logo} alt='logo plate perfection' />
            </Link>
          </div>

          <ul className='app__navbar-links'>
            <li className={`${active === 'Home' ? 'active' : ''}`}>
              <Link to='/#home'>Home</Link>
            </li>
            <li className={`${active === 'Menu' ? 'active' : ''}`}>
              <Link to='/#menu'>Menu</Link>
            </li>
            <li className={`${active === 'Contact' ? 'active' : ''}`}>
              <Link to='/#Contact'>Contacts</Link>
            </li>
            <li className={`cart__desktop ${active === 'Cart' ? 'active' : ''}`}>
              <Link to='/Cart'>
                Cart
                <HiOutlineShoppingCart />
              </Link>
            </li>
          </ul>

          <div className='app__navbar-hamburguermenu'>
            <HiMenu className='app__hmenu-icon'onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                className='container'
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <SlClose className='close__button' onClick={() => setToggle(false)} />
                <ul>
                  <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
                  <div className='line1' />
  
                  <li>
                    <Link to='/#home' onClick={() => { setToggle(false); }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/#menu' onClick={() => { setToggle(false); }}>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to='/#Contact' onClick={() => { setToggle(false); }}>
                      Contacts
                    </Link>
                  </li>
                  <li className={`cart__mobile ${active === 'Cart' ? 'active' : ''}`}>
                    <Link className ='cart-mobile-link'to='/Cart'>
                      Cart
                      <HiOutlineShoppingCart />
                    </Link>
                  </li>
                  <div className='line2' />
                </ul>
              </motion.div>
            )}
          </div>
          <div className="line"/>
        </div>
      </nav>
    );
};

export default Navbar;

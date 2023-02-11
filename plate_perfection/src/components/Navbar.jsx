import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { images } from '../constants';
import navbar from './navbar.scss';

const Navbar = ({active}) => {
    const[toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
            <a href={`#Home}`}> </a>
        </div>

        <ul className='app__navbar-links'>
            {['Home', 'Menu', 'Contact', 'Cart'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}
                    
                     </a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenu onClick={() => setToggle(true)}/>
            { toggle && (
                <motion.div whileInView = {{ x: [300, 0] }} transition = {{ duration: 0.60, ease: 'easeOut'}}>
                    <SlClose onClick={() => setToggle(false)}/>
                    <ul>
                    {['Home', 'Menu', 'Contact', 'Cart'].map((item) => (
                        <li key= {item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
    )
}

export default Navbar
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import menu from './menu.scss';

const Menu = () => (
  <div>
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__menu app__flex"
    >
      <div className="app__menu-container app__flex">
        
        <div className='app__menu-title'>
          <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
          <h1>Menu</h1>
        </div>
          
          <div className='line__menu-title'/>
          
      </div>
    </motion.div>
  </div>

);
export default AppWrap(Menu, 'Menu');
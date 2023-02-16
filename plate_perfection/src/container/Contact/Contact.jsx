import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import contact from './contact.scss';

const Contact = () => (
  <div className="app__contact">
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
    >
      <div className="app__contact-container">

        <div className='app__contact-title'>
          <img  className='plate_perfection_logo' src={images.plate_perfection_logo} alt="plate_perfection_logo" />
          <h1>Contact</h1>
          <div className='line__contact-title'/>
        </div>

      </div>
      
      <div className='app__contact-components'>
      
      <h1>Plate Perfection</h1>
      <div className='line2'/>
      
      </div>
    </motion.div>
    
    <img className='plate_perfection_logo_background' src={images.plate_perfection_logo_background} alt="plate_perfection_logo_background" />
  
  </div>
);
export default AppWrap(Contact, 'Contact');
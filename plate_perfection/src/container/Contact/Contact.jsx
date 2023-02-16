import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import contact from './contact.scss';

const Contact = () => (
  <div>
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__contact app__flex"
    >
      <div className="app__contact-container app__flex">

        <div className='app__contact-title'>
          <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
          <h1>Contact</h1>
        </div>

          <div className='line__contact-title'/>

      </div>
      <img src={images.plate_perfection_logo_background} alt="plate_perfection_logo_background" />
      <div className='app__contact-components'>
      <h1>Czgfjhsxgjxygjsxyjsjjsontact</h1>
      </div>
    </motion.div>

  </div>

);
export default AppWrap(Contact, 'Contact');
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
//import { images } from '../../constants';
import contact from './contact.scss';

const Contact = () => {
  return (
    <div>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__contact app__flex"
    >
      <div className="app__contact-text app__flex">
          <h1 className="app__contact-title">Contact</h1>
          <div className='line'/>
          
      </div>
    </motion.div>
  </div>
  )
}

export default AppWrap(Contact, 'Contact');
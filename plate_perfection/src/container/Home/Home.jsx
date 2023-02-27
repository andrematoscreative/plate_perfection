import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import home from './home.scss';



const Home = () => (
  <div>
    <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 2.5 }}
      className="app__home app__flex"
    >
      <div className='app__home_title'>
        <h1 className="head-text">Plate Perfection</h1>
        <div className='line1'/>
      </div>
      <div className="app__home-text app__flex">
          <p className="p-text app__flex">"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
          
      </div>
    <div className='line2'/>
    </motion.div>
    <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.plate_perfection_home_background}
        alt="profile_plate_perfection_home_background"
        className="app__home-img"
    />
  </div>
);

export default AppWrap(Home, 'Home');
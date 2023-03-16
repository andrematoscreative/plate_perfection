/*import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './home.scss';



const Home = () => (
  <div className='app__home_backgimg'>
    <div  className='app__master-container'>
      <div className="app__home app__flex">
        <motion.div
        whileInView={{ y: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__home_title'>
            <h1 className="head-text">Plate Perfection</h1>
            <div className='line1'/>
        </motion.div>

        <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5 }}
        className="app__home-text app__flex">
            <p className="p-text app__flex">"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
        </motion.div>
        
        <motion.div
        whileInView={{ scale: [0, 1]  }}
        transition={{ duration: 2.5 }}
        className='app__home-line'>
        </motion.div>
      </div>
    </div>
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        src={images.plate_perfection_home_background}
        alt="profile_plate_perfection_home_background"
        className="app__home-img"
      />
  </div>
);

export default AppWrap(Home, 'Home');*/

import React from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './home.scss';

const Home = () => (
  <div className='app__home_backgimg'>
    <div  className='app__master-container'>
      <div className="app__home app__flex">
        <motion.div
        whileInView={{ y: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__home_title'>
            <h1 className="head-text">Plate Perfection</h1>
            <div className='app__line-title'/>
        </motion.div>

        <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5 }}
        className="app__home-text app__flex">
            <p className="p-text app__flex">"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
        </motion.div>
        
        <motion.div
        whileInView={{ scale: [0, 1]  }}
        transition={{ duration: 2.5 }}
        className='app__home-line'>
        </motion.div>
      </div>
    </div>
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        src={images.plate_perfection_home_background}
        alt="profile_plate_perfection_home_background"
        className="app__home-img"
      />
  </div>
);

export default AppWrap(Home, 'Home');

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import home from './home.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Home = () => (
  <div className="app__home app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__home-info"
    >
      <div className="app__home-text">
          <h1 className="head-text">Plate Perfection</h1>
          <div className='line'/>
          <p className="p-text app__flex">Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients.Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored.</p>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Home, 'Home');
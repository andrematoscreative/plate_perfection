import React from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './home.scss';

const Home = () => (
  <div id="home" className='app__home'>
    <div className='app__master-container'>
      <div className="app__home-content">
        <motion.div
          whileInView={{ y: [-35, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='app__home-content-title'>
            <h1 className="app__home-content-title-title">Plate Perfection</h1>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className='app__home-content-title-line'>
            </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="app__home-content-text">
            <p>"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='app__home-content-linebottom'>
      </motion.div>
    </div>

    <motion.img
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      src={images.plate_perfection_home_background_left}
      alt="plate_perfection_home_background_left"
      className="app__home-content-backgroundimg-left"
    />

    <motion.img
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      src={images.plate_perfection_home_background_right}
      alt="plate_perfection_home_background_right"
      className="app__home-content-backgroundimg-right"
    />

    <div className='app__home-content-backgroundimg-overlay'/>
  </div>
);

export default AppWrap(Home, 'Home');



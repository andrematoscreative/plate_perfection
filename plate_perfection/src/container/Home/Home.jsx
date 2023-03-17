import React from 'react';
import { Link } from 'react-router-dom';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './home.scss';

const Home = () => (
  <div className='app__home'>
    <div className='app__master-container'>
      <div className="app__home-content ">
        <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__home_title'>
            <h1 className="head-text">Plate Perfection</h1>
            <div className='app__line-title'/>
        </motion.div>

        <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5 }}
        className="app__home-text ">
            <p>"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
        </motion.div>

        <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]  }}
        transition={{ duration: 2 }}>
          <Link className='app__reservation-button' to='/reservation'>
              <div>Table reservations</div>
          </Link>
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
        transition={{ duration: 4, ease: 'easeInOut' }}
        src={images.plate_perfection_home_background}
        alt="profile_plate_perfection_home_background"
        className="app__home-img"
      />
      <div className='image__overlay'/>
  </div>
  
);

export default AppWrap(Home, 'Home');
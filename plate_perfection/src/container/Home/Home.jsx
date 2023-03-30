import React from 'react';
import { Link } from 'react-router-dom';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './home.scss';

const Home = () => (
  <div id="home" className='app__home'>
    <div className='app__master-container'>
      <div className="app__home-content ">
        <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='app__home-content-title'>
            <h1 className="app__home-content-title-title">Plate Perfection</h1>
            <motion.div
              whileInView={{ scale: [0, 1]  }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className='app__home-content-title-line'>
            </motion.div>
        </motion.div>

        <motion.div
        whileInView={{ x: [250, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
        className="app__home-content-text ">
            <p>"Savor every bite of impeccable cuisine, crafted to perfection with the finest ingredients. Experience the art of dining at Plate Perfection, where every dish is a masterpiece waiting to be savored."</p>
        </motion.div>

        <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1]  }}
        transition={{ duration: 2, ease: 'easeInOut' }}>
          <Link className='app__home-content-reservation-button' to='/reservation'>
              <div>Reservations</div>
          </Link>
        </motion.div>

      </div>
        <motion.div
        whileInView={{ scale: [0, 1]  }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='app__home-content-linebottom'>
        </motion.div>
    </div>

      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        src={images.plate_perfection_home_background}
        alt="plate_perfection_home_background"
        className="app__home-content-backgroundimg"
      />
      <div className='app__home-content-backgroundimg-overlay'/>
  </div>
);

export default AppWrap(Home, 'Home');
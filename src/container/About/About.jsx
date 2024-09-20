import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './About.scss';

const About = () => (
  <div id="about" className="app__about">
    <div 
      className="app__about-background" 
      style={{ backgroundImage: `url(${images.b})` }}
    >
      <div className="app__about-background-overlay" />
    </div>

    {/* Main Content */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 3, ease: 'easeInOut' }}
      className="app__about-content"
    >
      <div className="app__about-text-wrapper">
        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="app__about-text"
        >
          <p>"At Plate Perfection, we blend creativity with culinary expertise to craft a unique dining experience."</p>
        </motion.div>

        <motion.div
          whileInView={{ y: [-30, 0], opacity: [0, 1] }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="app__about-content-reservation-wrapper"
        >
          <Link className="app__about-content-reservation-button" to="/reservation">
            <div>Reservations</div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(About, 'About');
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { images } from '../../constants';
import './contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameForm = event => {
    setName(event.target.value);
  };

  const emailForm = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div id="contact" className="app__contact">
      <motion.div
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__contact-title">
      <img className="plate_perfection_logo"
      src={images.plate_perfection_logo}
      alt="plate_perfection_logo"/>
      <h1>Contact</h1>
      </motion.div>

        <div className="app__contact-container">
          <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="app__contact-information">
            
            <div className="app__connections">
              <div>
                <a className="test" href="tel:+23456789">
                  <IoMdCall className="telephoneNumber" />
                  002 3456 789
                </a>
              </div>
              
              <div>
                <a href="mailto:plateperfectioncuisine@gmail.com">
                <AiOutlineMail className="email" />
                plateperfectioncuisine@gmail.com
                </a>
              </div>
            </div>
            
            <div className="app__contact-form">
              <h2>
                <span>Subscribe</span> to our cuisine newsletter, keep up with
                our new delicious news!!
              </h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={name} onChange={nameForm} />
                </label>
                <label>
                  Email:
                  <input type="email" value={email} onChange={emailForm} />
                </label>
                <button className="Subscribe_button" type="Subscribe">Subscribe newsletter</button>
              </form>
            </div>
            </motion.div>
            
            <motion.div
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__contact-map-container">
            <iframe className="app__contact-map" id="gmap_canvas" src="https://maps.google.com/maps?q=Flag%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </motion.div>
        </div>

        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        src={images.plate_perfection_logo_background}
        alt="profile_plate_perfection_logo_background"
        className="plate_perfection_logo_background"
        />
      
        <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 2.5 }}
        className="app__copyright">
          <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 2.5 }}
          className='line__bottom'>
          </motion.div>
          <div className="plate_perfection-copyright">
            <img className="plate_perfection_logo"
            src={images.plate_perfection_logo}
            alt="plate_perfection_logo"/>
            <p className='p1'> © 2023 Plate Perfection </p>
          </div>
          <a href="https://www.andrematoscreative.com" target="_blank">
            <div className="andrematoscreative-copyright">
              <img className="logo_andrematoscreative"
              src={images.logo_andrematoscreative}
              alt="logo_andrematoscreative"/>
              <p className='p2'> Made by André Matos | www.andrematoscreative.com</p>
            </div>
          </a>  
        </motion.div>
    </div>
  );
};

export default AppWrap(Contact, 'Contact');



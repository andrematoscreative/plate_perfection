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
    <div className="app__contact">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <div className="app__contact-container">
            
            <div className="app__contact-title">
              <img
                className="plate_perfection_logo"
                src={images.plate_perfection_logo}
                alt="plate_perfection_logo"
              />
              <h1>Contact</h1>
              <div className="line__contact-title" />
            </div>
          <div className="app__contact-information">
           
            <div className="app__connections">
              <a href="tel:+23456789">
                <IoMdCall className="telephoneNumber" />
                002 3456 789
              </a>
              <br />
              <a href="mailto:plateperfectioncuisine@gmail.com">
                <AiOutlineMail className="email" />
                plateperfectioncuisine@gmail.com
              </a>
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
            <div className="line3"/>
          </div>
          <div className="app__contact-map-container">
            <iframe className="app__contact-map" id="gmap_canvas" src="https://maps.google.com/maps?q=Flag%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </motion.div>
      <img className="plate_perfection_logo_background" src={images.plate_perfection_logo_background}alt="plate_perfection_logo_background"/>
    </div>
  );
};

export default AppWrap(Contact, 'Contact');
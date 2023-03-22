import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { images } from '../../constants';
import './contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error(error));
  }, []);

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
    <div id="contact"> 
      <div className="app__contact">
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__contact-title">
        <img className="plate_perfection_logo"
        src={images.plate_perfection_logo}
        alt="plate_perfection_logo"/>
        <h1>Contacts</h1>
          <motion.div
            whileInView={{ scale: [0, 1]  }}
            transition={{ duration: 2.5 }}
            className='contact__title-line'>
          </motion.div>
        </motion.div>

          <div className="app__contact-container">
            <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
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
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }}>
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
          transition={{ duration: 0 }}
          className="app__copyright">
            <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2 }}
            className='line__bottom'>
            </motion.div>
            
            <div className="plate_perfection-copyright">
              <img className="plate_perfection_logo"
              src={images.plate_perfection_logo}
              alt="plate_perfection_logo"/>
              <p className='p1'> © 2023 Plate Perfection </p>
            </div>
            
            <a href="https://www.andrematoscreative.com" target="_blank" style={{ textDecoration: 'none' }}>
              <div className="andrematoscreative-copyright">
                <img className="logo_andrematoscreative"
                src={images.logo_andrematoscreative}
                alt="logo_andrematoscreative"/>
                <p className='p2'> Made by André Matos | www.andrematoscreative.com</p>
              </div>
            </a>
          </motion.div>
          
          <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          src={images.plate_perfection_contacts_background}
          alt="plate_perfection_contacts_background"
          className="app__backgroundimg-contacts"
          />
          <div className='image__contact-overlay'/>
      
      </div>
    </div>
  );
};

export default AppWrap(Contact, 'Contact');



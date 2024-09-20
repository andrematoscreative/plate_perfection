import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="app__master-container">
            
            <div className="app__contact-header">
              <motion.div  
              whileInView={{ y: [-35, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }} 
              className='app__contact-header-title'>
                <img className="app__contact-header-title-logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
                <h1 className='app__contact-header-title-title'>Contacts</h1>
                <motion.div
                  whileInView={{ scale: [0, 1]  }}
                  transition={{ duration: 2.5 }}
                  className='app__contact-header-title-line'>
                </motion.div>
              </motion.div>
            </div>

          <div className="app__contact-container">
            <motion.div
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__contact-container-connections">
                <div>
                  <a className="app__contact-container-connections-telephone" href="tel:+23456789">
                    <IoMdCall className="telephoneNumber" />
                    002 3456 789
                  </a>
                </div>
                
                <div>
                  <a className="app__contact-container-connections-mail" href="mailto:plateperfectioncuisine@gmail.com">
                  <AiOutlineMail className="email" />
                  plateperfectioncuisine@gmail.com
                  </a>
                </div>
              
              <div className="app__contact-container-form">
                <h2 className="app__contact-container-form-title">
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
                  <button className="app__contact-container-form-subscribe-button" type="Subscribe">Subscribe newsletter</button>
                </form>
              </div>

              <Link to='/Reservation' className='app__contact-container-reservation-button_2'>Reservations</Link>
            </motion.div>
              
              <motion.div
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }}>
              <iframe className="app__contact-container-map" id="gmap_canvas" src="https://maps.google.com/maps?q=Flag%20Porto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </motion.div>
              
            <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2 }}
            className='app__contact-line__bottom'>
            </motion.div>
          </div>


        </div>
          
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        src={images.a}
        alt="plate_perfection_contacts_background"
        className="app__backgroundimg-contact"
      />
      <div className='app__backgroundimg-overlay'/> 
      
    </div>
  );
};

export default AppWrap(Contact, 'Contact');
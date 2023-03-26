import React, { useState } from 'react';
import './reservation.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const Reservation = () => {
    const [numChairs, setNumChairs] = useState(2);
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // code to handle submitting reservation data goes here
    };

  return (
    <div className='app__reservation-page'>
      <div className="app__master-container">
        
          <div className="app__reservation-page-header">
              <motion.div  
              whileInView={{ y: [-35, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }} 
              className='app__reservation-page-header-title'>
                <img className="app__reservation-page-header-title-logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
              <h1 className='app__reservation-page-header-title-title'>Reservation</h1>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 3 }}
                className='app__reservation-page-header-title-line'>
              </motion.div>
            </motion.div>
          </div>
          <div className='app__reservation-page-container'>
            <div className='app__reservation-page-container-data'>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='numChairs'>Number of People:</label>
                  <input type='number' id='numChairs' value={numChairs} onChange={(e) => setNumChairs(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='time'>Reservation Time:</label>
                  <input type='text' id='time' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                </form>
              </div>
            
            <div className="app__reservation-page-container-line-vert"/>

            <div className='app__reservation-page-container-costumer'>
            <img className="app__reservation-page-container-image-background" src={images.reservation_background} alt="reservation_background_image" />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='phoneNumber'>Phone Number:</label>
                  <input type='text' id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
              </form>
              <img src="" alt="" />
            </div>
          <button className="app__reservation-page-container-button" type='submit'>Submit Reservation</button>
          <motion.div
            whileInView={{scale: [0, 1]}}
            transition={{ duration: 2 }}
            className='app__reservation-page-container-line'>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

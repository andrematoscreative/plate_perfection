import React, { useState } from 'react';
import './reservation.scss';

const Reservation = () => {
    const [numTables, setNumTables] = useState(1);
    const [numChairs, setNumChairs] = useState(2);
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // code to handle submitting reservation data goes here
    };

  return (
    <div className='reservation-page'>
      <h1>Table Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='numTables'>Number of Tables:</label>
          <input type='number' id='numTables' value={numTables} onChange={(e) => setNumTables(e.target.value)} />
        </div>
        <div>
          <label htmlFor='numChairs'>Number of Chairs:</label>
          <input type='number' id='numChairs' value={numChairs} onChange={(e) => setNumChairs(e.target.value)} />
        </div>
        <div>
          <label htmlFor='time'>Reservation Time:</label>
          <input type='text' id='time' value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input type='text' id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Reservation;

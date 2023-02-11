import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
//import { images } from '../../constants';
import contact from './contact.scss';

const Contact = () => {
  return (
    <h2 className="head-text">Contact</h2>
  )
}

export default AppWrap(Contact, 'Contact');
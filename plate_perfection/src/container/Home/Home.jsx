import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
//import { images } from '../../constants';
import home from './home.scss';

const Home = () => {
  return (
    <h2 className="head-text">Home</h2>
  )
}

export default AppWrap(Home, 'Home');
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
//import { images } from '../../constants';
import menu from './menu.scss';

const Menu = () => {
  return (
    <h2 className="head-text">Menu</h2>
  )
}

export default AppWrap(Menu, 'Menu');
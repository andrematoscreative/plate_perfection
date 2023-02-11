import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
//import { images } from '../../constants';
import cart from './cart.scss';

const Cart = () => {
  return (
    <h2 className="head-text">Cart</h2>
  )
}

export default AppWrap(Cart, 'Cart');
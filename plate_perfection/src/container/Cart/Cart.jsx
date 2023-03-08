import React, { useState, useEffect, useContext } from "react";
import "./cart.scss";
import { AiOutlineShoppingCart, AiOutlineMinusCircle } from "react-icons/ai";
import { HiMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Cart = () => {
  return (
  <div>
    <p className= "li__cart">Cart<HiOutlineShoppingCart/></p>
    
  </div>
  )
}

export default Cart;
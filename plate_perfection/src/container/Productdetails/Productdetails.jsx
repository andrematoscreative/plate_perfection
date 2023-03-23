import React, { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { motion } from 'framer-motion';
import "./productdetails.scss";
import { productData } from '../../container';

const Productdetails = ({ card, onClose, item }) => {
  const { id } = useParams();
  const AddToCart = (item) => {console.log('Item added to cart:', item);};
  let product = null 
  if (id !== undefined) {
    product = productData[parseInt(id) - 1];
  }    
  return (
      <div className="app__menu-card-details">
          <motion.div
          whileInView={{ y: [-35, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="app__menu-card-details-title">
          <h1>Product detail</h1>
          <motion.div
              whileInView={{ scale: [0, 1]  }}
              transition={{ duration: 3 }}
              className='app__menu-card-details-title-line'>
          </motion.div>
        </motion.div>

        <div className="app__menu-card-details-container">
        <div className='app__menu-card-details-upperline'/>
          <div className="app__menu-card-details-image-container">
            <motion.div whileInView={{opacity: [0, 1] }} transition={{ duration: 3 }}>
              <img src={product.image} alt={product.name} className="app__menu-card-details-image-container-image" />
            </motion.div>
          </div>

          <div className="app__menu-card-details-info-container">
            <div className="app__menu-card-details-info-container-name">{product.name}
            <div className="app__menu-card-details-info-container-name-line"/>
            </div>
            <p className="app__menu-card-details-info-container-description">{product.description}</p>
            <p className="app__menu-card-details-info-container-body">{product.body}</p>
            <p className="app__menu-card-details-info-container-price">{product.price}</p> 
            <button className="app__menu-card-details-info-container-add__to-cart-button" onClick={() => AddToCart(item)}>Add to cart</button>
          </div>
          <div className='app__menu-card-details-downline'/>

        </div>

        
        {/* <div>
          <motion.div
          whileInView={{opacity: [0, 1] }}
          transition={{ duration: 3 }}>
          <img src={product.image} alt={product.name} className="app__menu-card-details-image" />
          </motion.div>
        </div>

        <div className="app__menu-card-details-info">
          <div className="app__menu-card-details-info-name">{product.name}</div>
          <p className="app__menu-card-details-info-description">{product.description}</p>
          <p className="app__menu-card-details-info-body">{product.body}</p>
          <p className="app__menu-card-details-info-price">{product.price}</p> 
          <button className="app__menu-card-details-info-add__to-cart-button" onClick={() => AddToCart(item)}>Add to cart</button>
        </div> */}
      </div>
    );
  };
  export default Productdetails;
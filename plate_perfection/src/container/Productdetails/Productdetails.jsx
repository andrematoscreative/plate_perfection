import React, { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
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
        <div className="app__menu-card-details-title">
          <h1>Product detail</h1>
          <div className="app__menu-card-details-title-line"/>
        </div>
        <img src={product.image} alt={product.name} className="app__menu-card-details-image" />
        <div className="app__menu-card-details-info">
          <div className="app__menu-card-details-info-name">{product.name}</div>
          <p className="app__menu-card-details-info-description">{product.description}</p>
          <p className="app__menu-card-details-info-body">{product.body}</p>
          <p className="app__menu-card-details-info-price">{product.price}</p> 
          <button className="app__menu-card-details-info-add__to-cart-button" onClick={() => AddToCart(item)}>Add to cart</button>
        </div>
      </div>
    );
  };
  export default Productdetails;
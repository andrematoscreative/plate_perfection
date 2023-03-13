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
        <div className="app__menu-card-details-header">
          <h1>Product detail</h1>
        </div>
        <img src={product.image} alt={product.name} className="app__menu-card-image" />
        <div className="app__menu-card-details-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.body}</p>
          <p>{product.price}</p> 
          <button className="add__to-cart-button" onClick={() => AddToCart(item)}>Add to cart</button>
        </div>
      </div>
    );
  };
  export default Productdetails;
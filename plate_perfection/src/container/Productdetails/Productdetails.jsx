import React, { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import MyContext from "../context";
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import { images } from '../../constants';
import "./productdetails.scss";
import { productData } from '..';

const Productdetails = ({ card, onClose, item }) => {
  const { id } = useParams();
  let product = null

  const [toggle, setToggle] = useState(false);
  
  const [extras, setExtras] = useState([]);
  const [extraAdded, setExtraAdded] = useState(false)
  const {cart, setCart } = useContext(MyContext);
  
  const AddToCart = (item) => {       //console.log('Item added to cart:', item);};
    const newCart = [
      ...cart,
      {
        name: item.name,
        id: item.id,
        extras: { productId: item.id, extra: extras },
        price: item.price,
      },
    ];

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setExtras([]);
    setToggle(!toggle);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const addExtras = (item) => {
    extras.push({ name: item.name, price: item.price, quantity: item.quantity +1 });
    setExtraAdded(true)
    setTimeout(() => setExtraAdded(false), 1000);
  };
  
  
  if (id !== undefined) {
    product = productData[parseInt(id) - 1];
  }
  
  return (
    <div className="app__menu-card-details">
        <div className="app__master-container">

          <div className="app__menu-card-details-header">
            <motion.div  
            whileInView={{ y: [-35, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }} 
            className='app__menu-card-details-header-title'>
              <img className="app__menu-card-details-header-title-logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
              <h1 className='app__menu-card-details-header-title-title'>Product Detail</h1>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 3 }}
                className='app__menu-card-details-header-title-line'>
              </motion.div>
            </motion.div>
          </div>

          <div className="app__menu-card-details-container">
            
            <div className="app__menu-card-details-image-container">
              <motion.div whileInView={{opacity: [0, 1] }} transition={{ duration: 3 }}>
                <img src={product.image} alt={product.name} className="app__menu-card-details-image-container-image" />
              </motion.div>
            </div>

            <div className="app__menu-card-details-info-container">
              <div className="app__menu-card-details-info-container-name">{product.name}
                <motion.div
                  whileInView={{scale: [0, 1]}}
                  transition={{ duration: 2.5 }}
                  className="app__menu-card-details-info-container-name-line">
                </motion.div>
              </div>
                <p className="app__menu-card-details-info-container-description">{product.description}</p>
                <p className="app__menu-card-details-info-container-body">{product.body}</p>
                <p className="app__menu-card-details-info-container-price">{product.price}</p> 
                
                {product.Ingredients.map((ing) => (
                <div className="app__menu-card-details-info-container-ingredients"
                  key={product.id}
                >
                  <p>{ing.Ingredient1}</p>
                  <p>{ing.Ingredient2}</p>
                  <p>{ing.Ingredient3}</p>
                </div>
                ))}

                <button className="app__menu-card-details-info-container-add__to-cart-button" onClick={() => setToggle(!toggle)}>Add to Order</button>
                
            </div>
              
              <motion.div
                  whileInView={{scale: [0, 1]}}
                  transition={{ duration: 2 }}
                  className='app__menu-card-details-downline'>
              </motion.div>
              
            <div className="app__menu-card-details-share-container">
              
              <p className="app__menu-card-details-share-container-title">Share your perfect moment</p>
              <div className="app__menu-card-details-share-container-icons">
                <a onClick={() => window.open("https://www.Instagram.com", "Instagram", "width=600,height=400")}>
                <AiFillInstagram />
                </a>
                <a onClick={() => window.open("https://www.twitter.com", "Twitter", "width=600,height=400")}>
                <AiFillTwitterCircle />
                </a>
                <a onClick={() => window.open("https://www.facebook.com", "Facebook", "width=600,height=400")}>
                <AiFillFacebook />
                </a>
              </div>

            </div>
          </div>

        </div>

        {toggle && (
        <div>
          <div
            className="app__menu-card-details-extras-popup"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1]}}
            transition={{ duration: 1, ease: 'easeOut'}}
            className="app__menu-card-details-extras-container"
          >
            <h1 className="app__menu-card-details-extras-container-title">
            Would you like additional ingredients with your order?{" "}
            </h1>

            {product.extras.map((ext) => (
              <div
                className="app__menu-card-details-extras-container-extras"
                key={ext.id}
              >
                <button
                  onClick={() =>
                    addExtras({ name: ext.name, price: ext.price})
                  }
                  className="app__menu-card-details-extras-container-extras-button"
                >
                  {ext.name}
                </button>
                <p className="app__menu-card-details-extras-container-extras-price">
                  {ext.price}
                </p>
              </div>
            ))}
            {extraAdded && 
              <p className="app__menu-card-details-extras-container-extras-price">
              Extra ingredient added
              </p>
            }

            <motion.div
              whileInView={{scale: [0, 1]}}
              transition={{ duration: 2 }}
              className='app__menu-card-details-extras-container-extras-line'>
            </motion.div>

            <div className="app__menu-card-details-extras-container-extras-button-container">
              
              <button
                onClick={() =>
                  AddToCart({
                    name: product.name,
                    id: product.id,
                    extras: [extras],
                    price: product.price,
                  })
                }
                className="app__menu-card-details-extras-container-extras-button-container-button">
                Add Plate to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
    
    );
  };

export default AppWrap(Productdetails, 'Productdetails');
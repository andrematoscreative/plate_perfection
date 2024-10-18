import React, { useState, useEffect } from "react";
import "./checkout.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Checkout = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const storage = localStorage.getItem("cart");
  const [orderSubmit, setOrderSubmit] = useState(false)

  const calculateTotalSpent = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(",", ".").replace("€", ""));
      item.extras.extra.forEach((ext) => {
        total += parseFloat(ext.price.replace(",", ".").replace("€", ""));
      });
    });
    return total.toFixed(2) + "€";
  };

  const submitOrder = (event) => {
    event.preventDefault();
    localStorage.removeItem("cart");
    setOrderSubmit(!orderSubmit)
  };
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    
  }, [storage]);

  return (
    <div className="app__checkout">
      
      <div className="app__checkout-container app__master-container">
        
        <div className="app__checkout-container-header">
          <motion.div
            whileInView={{ y: [-25, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__checkout-container-header-title">
            <img
              className="app__checkout-container-header-title-logo"
              src={images.plate_perfection_logo}
              alt="plate_perfection_logo"
            />
            <h1 className="app__checkout-container-header-title-title">Checkout</h1>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 3 }}
              className="app__checkout-container-header-title-line">
            </motion.div>
          </motion.div>
        </div>

        <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__checkout-container-content">
          <div>
            <h1 className="app__checkout-container-content-form-title">Personal Information</h1>
            <form onSubmit={submitOrder} className="app__checkout-container-content-form">
              <div className="app__checkout-container-content-form-text">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                ></input>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                ></input>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                ></input>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  required
                ></input>
                </div>
                <input
                  className="app__checkout-container-content-form-btn"
                  type="submit"
                  value="Submit"
                  disabled={cart.length=== 0}
                ></input>
            </form>
          </div>

          <div className="app__checkout-cart">
            <div className="app__checkout-cart-container"> {/* cart */}
              <div className="app__checkout-cart-items">
                <div>
                {cart.map((item, i) => (
                  <div className="app__checkout-cart-item" key={item.id}>
                    <div className="app__checkout-cart-item-header">
                      <p className="app__checkout-cart-item-header-name">
                        {item.name}
                      </p>
                      <p className="app__checkout-cart-item-header-price">
                        {item.price}
                      </p>
                    </div>
                    <div>
                      <div className="app__checkout-cart-item-extras">
                        {item.extras.extra.map((ext, i) => (
                          <div key={i}>
                            <div className="app__checkout-cart-item-extras-header">
                              <p className="app__checkout-cart-item-extras-header-name">
                                {ext.name}
                              </p>
                              <p className="app__checkout-cart-item-extras-header-price">
                                {" "}
                                {ext.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                {cart.length > 0 && (
                  <div className="app__checkout-cart-items-total">
                    <p> Total : {calculateTotalSpent()}</p>
                  </div>
                )}
                {orderSubmit  && 
                <p className="app__checkout-cart-empty">Thank you for ordering with us!</p>
                }
                {cart.length === 0 && orderSubmit === false && <p className="app__checkout-cart-empty"> No items to checkout</p>}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
      {/*<img className="app__checkout-background" src={images.c} alt="background" />*/}

    </div>
  );
};

export default Checkout;
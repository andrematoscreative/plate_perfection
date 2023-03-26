import React, { useState, useEffect } from "react";
import "./Checkout.scss";
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
      <div className="app__main__container">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__checkout__header"
        >
          <img
            className="app__checkout__header__logo"
            src={images.logo__dark}
            alt="logo"
          />
          <h1 className="app__checkout__header__title">Checkout </h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__checkout__container"
        >
          <div>
            <h1 className="app__checkout__form__title">Personal Information</h1>
            <form onSubmit={submitOrder} className="app__checkout__form">
              <input
                className="app__checkout__form__text"
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              ></input>
              <input
                className="app__checkout__form__text"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              ></input>
              <input
                className="app__checkout__form__text"
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
              ></input>
              <input
                className="app__checkout__form__text"
                type="text"
                id="address"
                placeholder="Enter your address"
                required
              ></input>
              <input
                className="app__checkout__form__btn"
                type="submit"
                value="Submit"
                disabled={cart.length=== 0}
              ></input>
            </form>
          </div>

          <div className="app__checkout__cart">
            <div className="app__checkout__cart__container">
              <div className="app__checkout__cart__items">
                <div>
                {cart.map((item, i) => (
                  <div className="app__checkout__cart__item" key={item.id}>
                    <div className="app__checkout__cart__item__header">
                      <p className="app__checkout__cart__item__header__name">
                        {item.name}
                      </p>
                      <p className="app__checkout__cart__item__header__price">
                        {item.price}
                      </p>
                    </div>
                    <div>
                      <div className="app__checkout__cart__item__extras">
                        {item.extras.extra.map((ext, i) => (
                          <div key={i}>
                            <div className="app__checkout__cart__item__extras__header">
                              <p className="app__checkout__cart__item__extras__header__name">
                                {ext.name}
                              </p>
                              <p className="app__checkout__cart__item__extras__header__price">
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
                  <div className="app__checkout__cart__items__total">
                    <p> Total : {calculateTotalSpent()}</p>
                  </div>
                )}
                {orderSubmit  && 
                <p className="app__checkout__cart__empty">Thank you for ordering with us!</p>
                }
                {cart.length === 0 && orderSubmit === false && <p className="app__checkout__cart__empty"> No items to checkout</p>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <img className="app__checkout__bg" src={images.logo_cream} alt="logo" />
    </div>
  );
};

export default Checkout;

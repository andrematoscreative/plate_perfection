import React, { useContext, useEffect } from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "../../constants";
import MyContext from "../context";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext); // Using cart and setCart from MyContext

  // Function to remove an item from the cart
  const removeFromCart = (id, i) => {
    const updatedCart = cart.filter((item, index) => index !== i);
    setCart(updatedCart); // Update context state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    }
  };

  // Function to remove extras from an item in the cart
  const removeExtras = (itemIndex, extraIndex) => {
    const updatedCart = [...cart];
    updatedCart[itemIndex].extras.extra.splice(extraIndex, 1);
    setCart(updatedCart); // Update context state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };

  // Calculate the total price of the cart
  const priceTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(",", ".").replace("€", ""));
      item.extras.extra.forEach((ext) => {
        total += parseFloat(ext.price.replace(",", ".").replace("€", ""));
      });
    });
    return total.toFixed(2) + "€";
  };

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app__mobile-cart">
      <div className="app__master-container">
        <div className="app__mobile__cart__header">
          <motion.div
            whileInView={{ y: [-25, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__mobile__cart__header__title"
          >
            <img
              className="app__mobile__cart__header__title-logo"
              src={images.plate_perfection_logo}
              alt="plate_perfection_logo"
            />
            <h1 className="app__mobile__cart__header__title-title">Cart</h1>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 3 }}
              className="app__mobile__cart__header__title-line"></motion.div>
          </motion.div>
        </div>
        <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }} 
        className="app__mobile__cart__container">
          <div className="app__mobile__cart__items">
            {cart.map((item, index) => (
              <div className="app__mobile__cart__item" key={item.id}>
                <div className="app__mobile__cart__item__header">
                  <p className="app__mobile__cart__item__header__name">
                    {item.name}
                  </p>
                  <p className="app__mobile__cart__item__header__price">
                    {item.price}
                  </p>
                </div>
                <div>
                  {item.extras.extra.map((ext, i) => (
                    <div className="app__mobile__cart__item__extras" key={i}>
                      <div className="app__mobile__cart__item__extras__header">
                        <p className="app__mobile__cart__item__extras__name">
                          {ext.name}
                        </p>
                        <p className="app__mobile__cart__item__extras__price">
                          {ext.price}
                        </p>
                      </div>

                      <button
                        className="app__mobile__cart__item__extras__btn"
                        onClick={() => removeExtras(index, i)}
                      >
                        Remove extra ingredient
                      </button>
                    </div>
                  ))}

                  <div className="app__mobile__cart__items__btncontainer">
                    <button
                      className="app__mobile__cart__items__btncontainer__btn"
                      onClick={() => removeFromCart(item.id, index)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <div>
                <div className="app__mobile__cart__total">
                  <p>Total : {priceTotal()}</p>
                </div>

                <div className="app__mobile__cart__total">
                  <Link
                    className="app__mobile__cart__total__btn"
                    to="/Checkout"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}

            {cart.length === 0 && (
              <div className="app__mobile__cart__empty">
                <p className="app__mobile__cart__empty__desc">Cart is empty</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;

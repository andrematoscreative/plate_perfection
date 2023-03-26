import React, { useState, useEffect, useContext } from "react";
import "./cart.scss";
import { AiOutlineShoppingCart, AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from '../../constants';
import MyContext from "../context";

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, setCart } = useContext(MyContext);
  const storage = localStorage.getItem("cart");

  const removeFromCart = (id, i) => {
    const updatedCart = cart.filter((item, index) => index !== i);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    }
  };

  function removeExtras(item, idExtra) {
    const updatedCart = Object.values(cart);
    updatedCart[item].extras.extra.splice(idExtra, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

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

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [storage]);

  return (
    <div className="app__cart">
      <button className="app__cart__link" onClick={() => setToggle(!toggle)}>
        Cart <AiOutlineShoppingCart />
      </button>
      {toggle && (
        <div className="app__cart__container">
          <div
            className="app__cart__container__left"
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            whileInView={{ x: [250, 0] }}
            transition={{ duration: 1 }}
            className="app__cart__items"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="app__cart__container__close"
            />
            {cart.map((item, index) => (
              <div className="app__cart__items__item" key={index}>
                <div className="app__cart__items__item__header">
                  <p className="app__cart__items__item__header__name">
                    {item.name}
                  </p>
                  <p className="app__cart__items__item__header__price">
                    {item.price}
                  </p>
                </div>
                <div>
                  {item.extras.extra.map((ext, i) => (
                    <div className="app__cart__items__item__extras" key={i}>
                      <div className="app__cart__items__item__extras__content">
                        <p className="app__cart__items__item__extras__name">
                          {ext.name}
                        </p>
                        <p className="app__cart__items__item__extras__price">
                          {" "}
                          {ext.price}
                        </p>
                      </div>

                      <button
                        className="app__cart__items__item__extras__btn"
                        onClick={() => removeExtras(index, i)}
                      >
                        <AiOutlineMinusCircle />
                      </button>
                    </div>
                  ))}
                  <div className="app__cart__items__btncontainer">
                    <button
                      className="app__cart__items__btncontainer__btn"
                      onClick={() => removeFromCart(cart[item], index)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <div>
                <div className="app__cart__items__total">
                  <p> Total : {calculateTotalSpent()}</p>
                </div>
                <div className="app__cart__items__total">
                  <Link
                    className="app__cart__items__total__btn"
                    to="/Checkout"
                    onClick={() => setToggle(!toggle)}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}

            {cart.length === 0 && (
              <div className="app__cart__items__item">
                <p className="app__cart__items__item__empty">
                  {" "}
                  No items in cart
                </p>
              </div>
            )}

          </motion.div>

        </div>
      )}
    </div>
  );
};

export default Cart;
import React, { useState, useEffect } from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const storage = localStorage.getItem("cart");

  const removeFromCart = (id, i) => {
    const updatedCart = cart.filter((item, index) => index !== i);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    if (updatedCart.length === 0) {
      localStorage.clear();
    }
  };

  function removeExtras(item, extraIndex) {
    const updatedCart = Object.values(cart);
    updatedCart[item].extras.extra.splice(extraIndex, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

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

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [storage]);

  return (
    <div className="app__mobile-cart">
      <div className="app__master-container">
        <div className="app__mobile__cart__container">
          <div className="app__mobile__cart__header">
            <img
              className="app__mobile__cart__header__logo"
              src={images.plate_perfection_logo}
              alt="logo"
            />
            <h1 className="app__mobile__cart__header__title">Cart</h1>
          </div>
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
                          {" "}
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
                <div className="app__mobile__cart__total">
                  <p> Total : {priceTotal()}</p>
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
                <p className="app__mobile__cart__empty__desc">
                  {" "}
                  Cart is empty
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
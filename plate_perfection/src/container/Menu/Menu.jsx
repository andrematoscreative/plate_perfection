import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './menu.scss';
import { productData } from '../../container';

const Menu = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + itemsToShow);
  };

  const filteredProductData = productData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const AddToCart = (item) => {
    console.log('Item added to cart:', item);
  };

  return (
    <div id="menu">
      <div className="app__menu-container">
        <motion.div
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="app__menu-title">
          <img className="plate_perfection_logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
          <h1>Menu</h1>
            <motion.div
              whileInView={{ scale: [0, 1]  }}
              transition={{ duration: 2.5 }}
              className='menu__title-line'>
            </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2.5 }}
          className="app__menu-search"
        >
          <form>
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search plate"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </motion.div>

        <motion.div
          whileInView={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="app__menu-cards-container">
          {filteredProductData.slice(0, itemsToShow).map((item) => (
            <Link to={`/productdetails/${item.id}`} className="app__menu-card-link">
              <div key={item.id} className="app__menu-card-image-container">
                <img src={item.image} alt={item.name} className="app__menu-card-image"/>
                <div className="app__menu-card-line"></div>
              </div>
              <div className="app__menu-card-info">
                <h3 className="app__menu-card-name">{item.name}</h3>
                <p className="app__menu-card-description">{item.description}</p>
                <p className="app__menu-card-price">{item.price}</p>
                <p className="app__menu-card-details">Click for details</p>
                <button className="add__to-cart-button" onClick={() => AddToCart(item)}>Add to cart</button>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="load__more-container">
        {itemsToShow < filteredProductData.length && (
          <button onClick={loadMoreItems} className="app__menu-load-more">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default AppWrap(Menu, 'Menu');
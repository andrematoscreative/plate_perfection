/*import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import menu from './menu.scss';

const Menu = () => {
  const [productData, setProductData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [numProductsToShow, setNumProductsToShow] = useState(6);

  useEffect(() => {
    // Fetch product data from API and store in state
    fetch('./Data.js')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  useEffect(() => {
    // Slice the productData array to show only the first numProductsToShow products
    setVisibleProducts(productData.slice(0, numProductsToShow));
  }, [productData, numProductsToShow]);

  const handleLoadMore = () => {
    // Increase the number of products to show by 6 when the "Load More" button is clicked
    setNumProductsToShow(numProductsToShow + 6);
  };

  return (
    <div>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__menu app__flex"
      >
        <div className="app__menu-container app__flex">
          <div className="app__menu-title">
            <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
            <h1>Menu</h1>
          </div>
          <div className="line__menu-title" />

          <div className="menu__card-container">
            {visibleProducts.map((product) => (
              <div className="menu__card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>

          {visibleProducts.length < productData.length && (
            <button onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Menu, 'Menu');*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import menu from './menu.scss';
import { productData } from '../../container';

const Menu = () => {
  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <div>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__menu app__flex"
      >
        <div className="app__menu-container app__flex">
          <div className="app__menu-title">
            <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
            <h1>Menu</h1>
          </div>
          <div className="line__menu-title" />

          <div className="app__menu-cards-container">
            {productData.slice(0, itemsToShow).map((item) => (
              <div key={item.id} className="app__menu-card">
                <img src={item.image} alt={item.name} className="app__menu-card-image" />
                <h3 className="app__menu-card-name">{item.name}</h3>
                <p className="app__menu-card-description">{item.description}</p>
                <p className="app__menu-card-price">{item.price}</p>
              </div>
            ))}
          </div>

          {itemsToShow < productData.length && (
            <button onClick={loadMoreItems} className="app__menu-load-more">
              Load More
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Menu, 'Menu');
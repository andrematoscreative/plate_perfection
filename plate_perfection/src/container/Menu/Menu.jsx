import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './menu.scss';
import { productData } from '../../container';

const Menu = () => {
  const [itemsToShow, setItemsToShow] = useState(6);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + itemsToShow);
  };

  return (
    <div className='app__master-container'>
      <motion.div
        whileInView={{ y: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__menu app__flex"
      >
        <div className="app__menu-container app__flex">
          <div className="app__menu-title">
            <img src={images.plate_perfection_logo} alt="plate_perfection_logo" />
            <h1>Menu</h1>
          </div>
          <div className="line__menu-title" />

          <div class="app__menu-cards-container">
            {productData.slice(0, itemsToShow).map((item) => (
               <div key={item.id} class="app__menu-card">
               <div class="app__menu-card-image-container">
                   <img src={item.image} alt={item.name} class="app__menu-card-image" />
                   <div class="app__menu-card-line"></div>
               </div>
                <div class="app__menu-card-info">
                  <h3 class="app__menu-card-name">{item.name}</h3>
                  <p class="app__menu-card-description">{item.description}</p>
                  <p class="app__menu-card-price">{item.price}</p>
                </div>
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
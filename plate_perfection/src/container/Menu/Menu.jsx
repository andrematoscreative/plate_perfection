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
    <div id="menu" className='app__master-container'>
     
        <div className="app__menu-container">
            
            <motion.div
            whileInView={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__menu-title">
              <img className="plate_perfection_logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
              <h1>Menu</h1>
            </motion.div>
            
            <motion.div
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
            className="app__menu-cards-container">
            {productData.slice(0, itemsToShow).map((item) => (
               <div key={item.id} class="app__menu-card">
               <div className="app__menu-card-image-container">
                   <img src={item.image} alt={item.name} className="app__menu-card-image" />
                   <div className="app__menu-card-line"></div>
               </div>
                <div className="app__menu-card-info">
                  <h3 className="app__menu-card-name">{item.name}</h3>
                  <p className="app__menu-card-description">{item.description}</p>
                  <p className="app__menu-card-price">{item.price}</p>
                </div>
              </div>
            ))}
            </motion.div>
        </div>

          {itemsToShow < productData.length && (
            <button onClick={loadMoreItems} className="app__menu-load-more">
              Load More
            </button>
          )}
    </div>
  );
};

export default AppWrap(Menu, 'Menu');
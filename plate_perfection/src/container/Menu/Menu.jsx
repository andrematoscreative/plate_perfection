import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './menu.scss';
import { productData } from '../../container';

const Menu = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + itemsToShow);
  };

  /* const filteredProductData = productData.filter((item) => {
    return item.category.toLowerCase().includes(searchTerm.toLowerCase());
  }); */

  const filteredProductData = productData.filter((item) => {
    const search = searchTerm.toLowerCase();
    const category = item.category.toLowerCase();
    const name = item.name.toLowerCase();
  
    return category.includes(search) || name.includes(search);
  });

  const AddToCart = (item) => {
    console.log('Item added to cart:', item);
  };

  return (
    <div id="menu" className='app__menu'>
      <div className="app__master-container">

        <div className="app__menu-header">
          <motion.div  
          whileInView={{ y: [-35, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }} 
          className='app__menu-header-title'>
            <img className="app__menu-header-title-logo" src={images.plate_perfection_logo} alt="plate_perfection_logo" />
            <h1 className='app__menu-header-title-title'>Menu</h1>
            <motion.div
              whileInView={{ scale: [0, 1]  }}
              transition={{ duration: 2.5 }}
              className='app__menu-header-title-line'>
            </motion.div>
          </motion.div>
          
          <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2.5 }}
          className="app__menu-search">
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
        </div>
        
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.3 }}
        className="app__menu-cards-container">
        {filteredProductData.slice(0, itemsToShow).map((item) => (
            <Link to={`/productdetails/${item.id}`} className="app__menu-card">
              
              <div key={item.id} className="app__menu-card-image-container">
                <img src={item.image} alt={item.name} className="app__menu-card-image"/>
                <div className="app__menu-card-line"/>
              </div>
              
              <div className="app__menu-card-info">
                <div className="app__menu-card-info-name">{item.name}
                  <div className='app__menu-card-info-name-line'/>
                </div>
                <p className="app__menu-card-info-description">{item.description}</p>
                <p className="app__menu-card-info-details">Click for more details</p>
                <p className="app__menu-card-info-price">{item.price}</p>

                
              </div>

            </Link>
          ))}
          </motion.div>
      </div>

      <div className="btnload__more-container">
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
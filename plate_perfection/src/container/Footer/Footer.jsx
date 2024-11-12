import React from 'react';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { AiFillTwitterCircle, AiFillFacebook, AiOutlineInstagram} from "react-icons/ai";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__Footer">
      <div className='app__master-container'>
      <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__footer-copyright">

            <div className="app__footer-copyright-share-container-icons">
              <a onClick={() => window.open("https://www.Instagram.com", "Instagram", "width=600,height=400")}>
              <AiOutlineInstagram />
              </a>
              <a onClick={() => window.open("https://www.twitter.com", "Twitter", "width=600,height=400")}>
              <AiFillTwitterCircle />
              </a>
              <a onClick={() => window.open("https://www.facebook.com", "Facebook", "width=600,height=400")}>
              <AiFillFacebook />
              </a>
            </div>
            
            <div className="plate_perfection-copyright">
              <img className="plate_perfection-copyright-logo"
              src={images.plate_perfection_logo}
              alt="plate_perfection_logo"/>
              <p className='plate_perfection-copyright-text'> © 2023 Plate Perfection </p>
            </div>
            
            <a href="https://www.andrematoscreative.com" target="_blank" style={{ textDecoration: 'none' }}>
              <div className="andrematoscreative-copyright">
                <img className="andrematoscreative-copyright-logo"
                src={images.logo_andrematoscreative}
                alt="logo_andrematoscreative"/>
                <p className='andrematoscreative-copyright-text'> Made by André Matos | www.andrematoscreative.com</p>
              </div>
            </a>
          </motion.div>
        

      </div>
    </footer>
  );
};

export default AppWrap(Footer);
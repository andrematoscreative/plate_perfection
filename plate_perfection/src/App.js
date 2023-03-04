import React from 'react';
import { Home, Menu, Contact, Cart } from './container';
import { Navbar } from './components';
import './app.scss';

export const App = () => {
  
  return (
    <div className='app'>
        <Navbar />
        <Home />
        <Menu />
        <Contact />
    </div>
  );
}

export default App;
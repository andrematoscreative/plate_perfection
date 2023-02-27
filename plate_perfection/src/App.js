import React from 'react';
import { Home, Menu, Contact2, Cart } from './container';
import { Navbar } from './components';
import './app.scss';

export const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Home />
        <Menu />
        <Contact2 />
    </div>
  );
}

export default App;

/*import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Menu, Contact, Cart } from './container';
import { Navbar } from './components';
import './app.scss';

export const App = () => {
  
  return (
    <div className='app'>
        <Navbar></Navbar>
        <Home />
        <Menu />
        <Contact />
    </div>
  );
}

export default App;*/

import React from 'react';

import { Route, Routes } from 'react-router-dom'
import { Navbar, Principal, Cart } from './container';
import './app.scss';

export const App = () => {
  
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;

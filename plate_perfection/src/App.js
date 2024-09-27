import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Principal, About, Productdetails, Cart, Reservation, Checkout } from './container';
import MyContext from './container/context';
import './app.scss';

export const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  
  return (
    <div className='app'>
      <MyContext.Provider value={{cart, setCart}}>
        <Navbar/>
        <Routes>
          <Route path="/Productdetails/:id" element={<Productdetails />}></Route>
          <Route path="/Reservation" element={<Reservation />} />
          <Route path='/' element={<Principal />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path ='/Checkout' element={<Checkout/>}></Route>
        </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App;
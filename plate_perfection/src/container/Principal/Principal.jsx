import React from 'react'
import { Home, About, Menu, Contact, Footer } from '../../container';

const Principal = () => {
  return (
    <div id="home">
      <Home/>
      <About/>
      <Menu/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Principal;

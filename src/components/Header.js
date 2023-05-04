import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 


export default function Header({cartClicked, setcartClicked}) {
   

    function changeCart() {
       setcartClicked(!cartClicked); 
       console.log(cartClicked);

    }

    return (
        <>
         <div className='header'>
          <span>FAKE STORE</span>
          <nav>
          <Link to={'/home'} page='home'>Home</Link>
          <Link to={'/shop'} page='shop'>Shop</Link>
          <button onClick={() => changeCart()} >Cart</button>
          </nav>
         </div>
         
        </>
    )

}
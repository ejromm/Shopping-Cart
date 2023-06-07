import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 


export default function Header({cartClicked, setcartClicked}) {
   

    function changeCart() {
       setcartClicked(!cartClicked); 
       console.log(cartClicked);

    }

    return (
        <>
         <header className='header'>
          <Link className='home-link' to={'/'} page='home'>FAKE STORE</Link>
          <nav>
          <Link className='nav-link' to={'/'} page='home'>Home</Link>
          <Link className='nav-link' to={'/shop'} page='shop'>Shop</Link>
          <button type='button' className='nav-btn' onClick={() => changeCart()} >Cart</button>
          </nav>
         </header>
         
        </>
    )

}
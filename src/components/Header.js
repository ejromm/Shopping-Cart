import React from 'react'; 
import NavBar from './NavBar';
import '../styles/Header.css'; 

export default function Header() {


    return (
        <>
         <div className='header'>
          <span>Store</span>
          <NavBar className='nav-bar' />
         </div>
         
        </>
    )

}
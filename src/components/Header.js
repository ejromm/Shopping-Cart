import React from 'react'; 
import NavBar from './NavBar';
import '../styles/Header.css'; 

export default function Header() {


    return (
        <>
         <div className='header'>
          <span>FAKE STORE</span>
          <NavBar className='nav-bar' />
         </div>
         
        </>
    )

}
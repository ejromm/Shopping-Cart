import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 


export default function Header({cartClicked, setcartClicked}) {
    
    const [navExtended, setnavExtended] = useState(false);
    useEffect(() => {
       navExtended ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'; 
    }, [navExtended])
    function changeCart() {
       setcartClicked(!cartClicked); 
       console.log(cartClicked);

    }

    return (
        <>
         <header className='header'>
          <Link className='home-link' to={'/'} page='home'>FAKE STORE</Link>
          <button className={navExtended ? 'open-navbar-btn active' :'open-navbar-btn'} onClick={() => setnavExtended(!navExtended)}>
             <span className='line-1'></span>
             <span className='line-2'></span>
             <span className='line-3'></span>
          </button>
          <nav onClick={() => setnavExtended(false)} className={navExtended ? 'nav-open' : ''}>
            <Link className='nav-link'  onClick={() => setnavExtended(!navExtended)} to={'/'} page='home'>Home</Link>
            <Link className='nav-link'  onClick={() => setnavExtended(!navExtended)} to={'/shop'} page='shop'>Shop</Link>
            <button type='button' className='nav-btn' onClick={() => changeCart()} >Cart</button>
          </nav>
         </header>
         
        </>
    )

}
import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function NavBar() {

    return (
        <>
        <nav>
          <Link to={'/home'} page='home'>Home</Link>
          <Link to={'/shop'} page='shop'>Shop</Link>
          <Link to={'/cart'} page='cart'>Cart</Link>

        </nav>
        </>

    )

}
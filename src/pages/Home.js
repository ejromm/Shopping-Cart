import React from 'react'; 
import '../styles/Home.css'; 
import { Link } from 'react-router-dom';
export default function Home() {

    return(
        <>
        <div className='home'>
           <div className='home-header'>
                We're<br/> A Fake<br/> Store.
           </div>
           <div className='home-header-2'>
                A mock e-commerce site<br/> in React. 
           </div>
           <div className='shop-btn-container'>
                <Link id='shop-link' to={'/shop'} page='shop'>SHOP NOW</Link>
           </div>
           
        </div>
        </>
    )
}
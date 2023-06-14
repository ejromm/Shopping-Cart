import React from 'react'; 
import '../styles/Home.css'; 
import { Link } from 'react-router-dom';
export default function Home() {

    return(
        <>
        <div className='home'>
           <div className='home-header'>
                We're<br className='line-break'/> A Fake<br className='line-break'/> Store.
           </div>
           <div className='home-header-2'>
                A mock e-commerce site<br className='line-break'/> in React. 
           </div>
           <div className='shop-btn-container'>
                <Link id='shop-link' to={'/Shopping-Cart/shop'} page='shop'>SHOP NOW</Link>
           </div>
           
        </div>
        </>
    )
}
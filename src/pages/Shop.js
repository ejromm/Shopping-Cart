import React from 'react'; 
import '../styles/Shop.css';
import uniqid from 'uniqid';
import ShopCard from '../components/ShopCard';

export default function Shop({inventory}) {
       

    
   
    return (
        <div className='store'>
                {inventory.map((item) => {
                    
                    return (
                        <ShopCard key={uniqid()} item={item} />
                    )
                })}
        </div>
    )
}
import React from 'react'; 
import '../styles/Shop.css';

export default function Shop({inventory, setInventory}) {
        console.log('inventory in shop', inventory);
    return (
        <div className='store'>
                {inventory.map((item) => {
                    return (
                        <div id='shop-item'>
                            <img id='item-img' alt={item.title} src={item.image}/>
                            <span id='item-name'>{item.title.replace(/\s+/g,' ').trim()}</span>
                            <span id='item-rating'>{item.rating.rate} / 5</span>
                            <div className='item-price-cart'>
                                <span id='item-price'>${item.price}</span>
                                <button id='add-to-cart'>ADD TO CART</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
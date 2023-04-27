import React from 'react'; 
import '../styles/Shop.css';
import { FaStar, FaStarHalf,  } from "react-icons/fa";


export default function Shop({inventory, setInventory}) {
        console.log('inventory in shop', inventory);

    function getStars(rating) {
        //round to nearest half
        rating = Math.round(rating * 2 ) / 2;
        let output = []; 
        console.log('rating', rating)
       
        //append all whole stars
        for(let i = rating ; i >= 1; i--) {
            output.push(<FaStar style={{color: 'gold'}} />)
            rating--; 
            console.log('rating --', rating)
        }
        if (rating === .5) output.push(<FaStarHalf style={{color: "gold"}} />)
            

            return output;
        
    }
   
    return (
        <div className='store'>
                {inventory.map((item) => {
                    
                    return (
                        <div id='shop-item'>
                            <img id='item-img' alt={item.title} src={item.image}/>
                            <span id='item-name'>{item.title.replace(/\s+/g,' ').trim()}</span>
                            <span id='item-rating'>{getStars(item.rating.rate)}</span>
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
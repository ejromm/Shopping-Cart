import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf,  } from "react-icons/fa";
import uniqid from 'uniqid';
export default function ShopCard({ item }) {
    function getStars(rating) {
        //round to nearest half
        rating = Math.round(rating * 2 ) / 2;
        let output = []; 
        
        
        //append all whole stars
        for(let i = rating ; i >= 1; i--) {
            output.push(<FaStar key={uniqid()} style={{color: 'black'}} />)
            rating--; 
           
        }
        if (rating === .5) output.push(<FaStarHalf key={uniqid()} style={{color: "black"}} />)
            

            return output;
        
    }
    function addZeroes(num) {
         const dec = num.split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    return (
        <Link id='shop-item' to={'/shop/'+item.title} page={item.title} >
        <img id='item-img' alt={item.title} src={item.image} />
        <div className='item-price-cart' >
        <span  id='item-price'>${addZeroes(String(item.price))}</span>  
        <span  id='item-rating'>{getStars(item.rating.rate)}</span>
        </div>
        <span  id='item-name'>{item.title.replace(/\s+/g,' ').trim()}</span>
                           
                            
        </Link>

    )


}     

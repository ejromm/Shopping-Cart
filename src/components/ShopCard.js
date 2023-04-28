import React from "react";
import { Link } from "react-router-dom";
import GetStars from "../Util/GetStars";
import AddZeroes from "../Util/AddZeroes";
export default function ShopCard({ item }) {
   
   
        const name = item.title.replace(/[^A-Za-z0-9]/g, ' ')
        console.log('id in shopcard', item.id)
        console.log('name in shopcard', name.replace(/\s+/g, '-').trim())
    return (
        <Link id='shop-item' to={`/shop/${name.replace(/\s+/g, '-').trim()}`} page={item.title} >
        <img id='item-img' alt={item.title} src={item.image} />
        <div className='item-price-cart' >
        <span  id='item-price'>${AddZeroes(String(item.price))}</span>  
        <span  id='item-rating'>{GetStars(item.rating.rate)}</span>
        </div>
        <span  id='item-name'>{item.title.replace(/\s+/g,' ').trim()}</span>
                           
                            
        </Link>

    )


}     

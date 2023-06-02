import React from "react";
import '../styles/ShopItem.css'; 
import GetStars from "../Util/GetStars";
import AddZeroes from "../Util/AddZeroes";
export default function ShopItem({ item, cart, setCart, setcartClicked}) {
    
    function addToCart() {
        console.log('found?', cart.find(product => product.item.id === item.id )); 
        if (cart.find(product => product.item.id === item.id ) !== undefined) {
            
            const newItem = cart.find(product => product.item.id === item.id); 
            newItem.quantity += 1; 
            newItem.total = newItem.item.price * newItem.quantity;
            setCart([...cart]);
            setcartClicked(true);
            
            
            

       
        } else {
            setCart(cart.concat({item: item, quantity: 1, total: item.price}));
            setcartClicked(true);
            
        }
        
        console.log('cart', cart);
    }

    return (
      <div className="shop-item">
          <div className="shop-item-left">
              <img alt={item.title} src={item.image} id='shop-item-img' />
             
          </div>
          <div className="shop-item-right">
              <span id='shop-item-title'>{item.title}</span>
              <span  id='shop-item-rating'>{GetStars(item.rating.rate)}<i>({item.rating.count})</i></span>
              <span  id='shop-item-price'>${AddZeroes(String(item.price))}</span>  
              <span  id='shop-item-category'>Category:<i>{String(item.category)[0].toUpperCase() + String(item.category).slice(1)}</i></span>
              <span  id='shop-item-description'>{item.description}</span>
              <button onClick={()=> addToCart()} id='add-to-cart'>ADD TO CART</button>
          </div>


      </div>  
    )
}
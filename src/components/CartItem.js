import React from "react";
import Plus from '../assets/plus.svg'; 
import Minus from '../assets/minus.svg';
import AddZeroes from "../Util/AddZeroes";

export default function CartItem( { cart, item, setCart } ) {
   
    function increaseValue() {
        const controller = document.getElementById(item.item.id); 
        controller.value ++; 
        const cartItem = cart.find(((x) => x.item.id === item.item.id)); 
        cartItem.quantity ++; 
        cartItem.total = item.item.price * item.quantity;
        setCart([...cart]);
        console.log(cart);
       
    
    }
   function decreaseValue() {
        const controller = document.getElementById(item.item.id); 
        const cartCard = document.getElementById(`cart-item-${item.item.id}`)
        controller.value --; 
        const cartItem = cart.find(((x) => x.item.id === item.item.id)); 
        cartItem.quantity --; 
        cartItem.total = item.item.price * item.quantity;
        if(cartItem.quantity <= 0 ) {
            cart.splice(cart.indexOf(cartItem), 1);
            cartCard.remove();
            
        }
        setCart([...cart]);
        console.log(cart)
        
        
       
    }
   
    return (
        
        <div className='cart-item' id={`cart-item-${item.item.id}`}>
            <img src={item.item.image} alt='cart item img' id='cart-item-img' />
            <div className="cart-item-title">
                 <span id='cart-item-title-txt'>{item.item.title}</span>
                 <div className="controller-container">
                        <button onClick={() => decreaseValue()} id='cart-decrease'>
                            <img alt="minus" src={Minus} />
                        </button>
                        <input className="cart-controller" id={item.item.id} type="number" defaultValue={item.quantity}></input>
                        <button onClick={() => increaseValue()} id='cart-increase'>
                            <img alt="minus" src={Plus} />
                        </button>
                 </div>
              
            </div>
            <span id='cart-item-price'>${AddZeroes(String(item.item.price))}</span>
         </div>
    )

}
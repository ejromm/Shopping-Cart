import React from "react";
import Plus from '../assets/plus.svg'; 
import Minus from '../assets/minus.svg';
import AddZeroes from "../Util/AddZeroes";
export default function CartItem( {item} ) {

    function increaseValue() {
        const controller = document.getElementById(item.id); 
        controller.value ++; 
    }
   function decreaseValue() {
        const controller = document.getElementById(item.id); 
        controller.value --; 
       
    }
   
    return (
        
        <div className='cart-item'>
            <img src={item.image} alt='cart item img' id='cart-item-img' />
            <div className="cart-item-title">
                 <span id='cart-item-title-txt'>{item.title}</span>
                 <div className="controller-container">
                        <button onClick={() => decreaseValue()} id='cart-decrease'>
                            <img alt="minus" src={Minus} />
                        </button>
                        <input className="cart-controller" id={item.id} type="number" defaultValue={1}></input>
                        <button onClick={() => increaseValue()} id='cart-increase'>
                            <img alt="minus" src={Plus} />
                        </button>
                 </div>
              
            </div>
            <span id='cart-item-price'>${AddZeroes(String(item.price))}</span>
         </div>
    )

}
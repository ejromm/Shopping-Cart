import React from 'react'; 
import '../styles/Cart.css'; 
import uniqid from 'uniqid';
import CartItem from '../components/CartItem';
export default function Cart({cartClicked, setcartClicked, cart, setCart}) {



    
    function changeCart() {
        setcartClicked(!cartClicked); 
        console.log(cartClicked);
     }
     console.log('cart', cart);
    return (
        
        <div className='cart'>
            <svg onClick={() => changeCart()} className="Cart_svgClose__Wzojf" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path></svg>
            <h1>Your<br></br> Shopping <br></br> Bag</h1>
            <div className='cart-items-container'>
                {cart.map((item) => {
                    console.log(item);
                    return (
                           <CartItem key={uniqid()} cart={cart} item={item} />
                    )
                })}
            </div>
            <div className='checkout-div'>
                <button id='checkout-btn'>CHECKOUT</button>
            </div>
           
        </div>
    )
}
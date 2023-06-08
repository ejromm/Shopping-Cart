import React from 'react'; 
import '../styles/Cart.css'; 
import uniqid from 'uniqid';
import CartItem from '../components/CartItem';
import AddZeroes from '../Util/AddZeroes';
export default function Cart({cartClicked, setcartClicked, cart, setCart}) {

    function changeCart() {
        setcartClicked(!cartClicked); 
        console.log(cartClicked);
     }
     function getTotal() {
        let subtotal = 0; 
        if (cart.length === 1) subtotal =  cart[0].total; 
        else if (cart.length > 1) subtotal = cart.reduce((a, b) =>  ({total : a.total + b.total})).total;
        console.log('TOTAL', subtotal);
        return (
            <span id='subtotal'>
                {cart.length >= 1 ? 'Subtotal: $' + AddZeroes(subtotal) : '' }
            </span>
        )
     }
       
            return (
                <>
                <div className={`cart-clicked ${!cartClicked ? "cart-hidden" : ""}`}>
                    <div className='cart-heading'>
                       <h1>Your<br></br> Shopping <br></br> Bag</h1>
                       <button type='button' className='close-cart' onClick={() => changeCart()} >&#x2715;</button>
                    </div>
                   
                    <div className='cart-items-container'>
                        {cart.map((item) => {
                            console.log(item);
                            return (
                                   <CartItem key={uniqid()} cart={cart} item={item} setCart={setCart} />
                            )
                        })}
                    </div>
                    {getTotal()}
                    <div className='checkout-div'>
                        <button id='checkout-btn'>CHECKOUT</button>
                    </div>
                   
                </div>
                <div className={`hidden-div ${cartClicked ? "enabled" : "s"}`} onClick={() => cartClicked ? changeCart() : undefined}></div>
                </>
            )
        }
       
        
   
   

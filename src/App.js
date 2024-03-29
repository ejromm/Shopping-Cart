import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopItem from './pages/ShopItem';
import uniqid from 'uniqid';
export default function App() {
  const [inventory, setInventory] = useState([]);
  const [cartClicked, setcartClicked] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const retreiveInventory = async () => {
      try{
       const response = await fetch('https://fakestoreapi.com/products'); 
       const data = await response.json(); 
       setInventory(data);
      } catch(error) {
           console.error(error);
      }
   }
    retreiveInventory();
  }, []); 
  
  return (
    <>
    
     <BrowserRouter key={uniqid()}>
     <Cart cartClicked={cartClicked} setcartClicked={setcartClicked}  cart={cart} setCart={setCart}  /> 
     <Header cartClicked={cartClicked} setcartClicked={setcartClicked} />
     <Routes>
     <Route  path='/Shopping-Cart' element={<Home />}/>
     <Route  path='/Shopping-Cart/shop' element={<Shop inventory={inventory} setInventory={setInventory} />} />
         {inventory.map((item) => {
           const name = item.title.replace(/[^A-Za-z0-9]/g, ' ')
           return (<Route path={`/Shopping-Cart/shop/${name.replace(/\s+/g, '-').trim()}`} element={<ShopItem item={item} cart={cart} setCart={setCart} setcartClicked={setcartClicked}   /> } key={uniqid()} />)
         })}
    
     
    
     </Routes>
     </BrowserRouter>
     </>
  );
}



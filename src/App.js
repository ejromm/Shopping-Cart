import React, { useState, useEffect } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopItem from './pages/ShopItem';
import uniqid from 'uniqid';
export default function App() {
  const [inventory, setInventory] = useState([]);
  
  useEffect(() => {
    const retreiveInventory = async () => {
      try{
       const response = await fetch('https://fakestoreapi.com/products'); 
       const data = await response.json(); 
       setInventory(data);
      } catch(error) {
           console.log(error);
      }
   }
    retreiveInventory();
  }, []); 
  console.log('inventory', inventory);
  return (
    <>
    
     <BrowserRouter>
     <Header />
     <Routes>
     <Route  path='/home' element={<Home />}/>
     <Route  path='/shop' element={<Shop inventory={inventory} setInventory={setInventory} />} />
     <Route  path='/cart' element={<Cart />}/>
     {inventory.map((item) => {
        return (<Route path={'/shop/'+item.title} element={<ShopItem item={item} /> } key={uniqid()} />)
     })}
     </Routes>
     </BrowserRouter>
     </>
  );
}



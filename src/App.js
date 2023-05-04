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
  const [cartClicked, setcartClicked] = useState(false);
  
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
     {cartClicked ? <Cart /> : null}
     <Header cartClicked={cartClicked} setcartClicked={setcartClicked} />
     <Routes>
     <Route  path='/home' element={<Home />}/>
     <Route  path='/shop' element={<Shop inventory={inventory} setInventory={setInventory} />} />
         {inventory.map((item) => {
           const name = item.title.replace(/[^A-Za-z0-9]/g, ' ')
          console.log('id in app', item.id);
          console.log('name in app', name.replace(/\s+/g, '-').trim())
           return (<Route path={`/shop/${name.replace(/\s+/g, '-').trim()}`} element={<ShopItem item={item}   /> } key={uniqid()} />)
         })}
    
     
    
     </Routes>
     </BrowserRouter>
     </>
  );
}



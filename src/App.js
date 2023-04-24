import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header />
     <Routes>
     <Route  path='/home' element={<Home />}/>
     <Route  path='/shop' element={<Shop />} />
     <Route  path='/cart' element={<Cart />}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}



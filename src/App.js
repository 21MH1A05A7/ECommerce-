// import logo from './logo.svg';
import React from 'react';
import './components/App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Item from './components/Item';
import { useRef } from 'react';
// import Puma from './components/Brand.jsx'
import Brand from './components/Brand';
import Cart from './components/Cart';
import SetCart from './Context/useSetCart';
import { ToastContainer } from 'react-toastify';
function App() {



  return (
    <SetCart>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Signup" element={<Signup></Signup>} />  
              <Route path="/Item" Component={Item}></Route>
              <Route path="/brand" element={<Brand></Brand>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer />
    </SetCart>
  );
}

export default App;

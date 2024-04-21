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

function App() {



  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Signup" element={<Signup></Signup>} />  
              <Route path="/Item" Component={Item}></Route>
              <Route path="/brand" element={<Brand></Brand>}></Route>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;

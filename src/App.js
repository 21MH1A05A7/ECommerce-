// import logo from './logo.svg';
import React from 'react';
import './components/App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Item from './components/Item';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Signup" element={<Signup></Signup>} />  
              <Route path="/Item" Component={Item}></Route>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;

import logo from './logo.svg';

import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element ={<Login />} />
        
      </Routes>
    </BrowserRouter>
  )
}


export default App;

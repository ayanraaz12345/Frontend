import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import View from './view/View';
import Home from './view/components/home/Home';
import Product from './view/components/product/Product';
import Cart from './view/components/cart/Cart';
import Login from './view/components/login/Login';
import Register from './view/components/register/Register';

import Admin from './admin/Admin';
import Dashboard from './admin/components/dashboard/Dashboard';
import ProductAdmin from './admin/components/product/ProductAdmin';
import UserAdmin from './admin/components/user/UserAdmin';
import ProductDetailsAdmin from './admin/components/product-detail/ProductDetailsAdmin';
import OrderAdmin from './admin/components/order/OrderAdmin';
// import ProductCardAdmin from './admin/components/product/product-card/ProductCardAdmin';

import NotFound from './view/components/not-found/NotFound';
import ProductDetails from './view/components/product-detail/ProductDetails';
import OrderDetails from './view/components/order-detail/OrderDetails';
import LogOut from './view/components/log-out/LogOut';
import Order from './view/components/order/Order';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* ADMIN ROUTES */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='product' element={<ProductAdmin />} />
            <Route path='user' element={<UserAdmin />} />
            <Route path='product-details' element={<ProductDetailsAdmin />} />
            <Route path='order' element={<OrderAdmin />} />
            {/* <Route path='product-card' element={<ProductCardAdmin />} /> */}
          </Route>

          {/* USER ROUTES */}
          <Route path='/' element={<View />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='product' element={<Product />} />
            <Route path='product-detail' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='order' element={<Order />} />
            <Route path='order-detail' element={<OrderDetails />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='logout' element={<LogOut />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './view/View';
import Home from './view/components/home/Home';
import Product from './view/components/product/Product';
import Cart from './view/components/cart/Cart';
import Login from './view/components/login/Login';
import Register from './view/components/register/Register';
import Admin from './admin/Admin';
import Dashboard from './admin/components/dashboard/DashBoard';
import ProductAdmin from './admin/components/product/ProductAdmin';
import UserAdmin from './admin/components/user/UserAdmin';
import NotFound from './view/components/not found/NotFound';
import ProductDetails from './view/components/product detail/productDetails';
import Order from './view/components/order/Order';

import OrderDetails from './view/components/order detail/OrderDetails';
import OrderAdmin from './admin/components/order/orderAdmin';
import ProductDetailsAdmin from './admin/components/product details/ProductDetailsAdmin';
import LogOut from './view/components/log out/LogOut';




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* admin part */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path='product' element={<ProductAdmin />} />
            <Route path='user' element={<UserAdmin />} />
            <Route path='product-details' element={<ProductDetailsAdmin/>}/>
            <Route path='order' element={<OrderAdmin/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>



          </Route>

          {/* view part */}
          <Route path='/' element={<View/>}>
            <Route index element={<Home/>} />
            <Route path='home' element={<Home/>} />
            <Route path='product' element={<Product/>} />
           <Route path='product-detail' element={<ProductDetails/>}/>
    
            <Route path='cart' element={<Cart/>} />
            <Route path='order'element={<Order/>}/>
            <Route path='order-detail' element={<OrderDetails/>}/>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='logout' element={<LogOut/>}/>
            <Route path='*' element={<NotFound/>} />



          </Route>



        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App

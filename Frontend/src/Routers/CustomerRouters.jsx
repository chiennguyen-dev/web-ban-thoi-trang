import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import AuthModal from '../customer/Auth/AuthModal'
import ProfilePage from '../customer/ProfilePage/ProfilePage'

const CustomerRouters = () => {
  return (
    <div>

      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<HomePage />}></Route>
        <Route path='/register' element={<HomePage />}></Route>


        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        <Route path='/:levelOne/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>


        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <AuthModal />

      <Footer />

    </div>
  )
}

export default CustomerRouters

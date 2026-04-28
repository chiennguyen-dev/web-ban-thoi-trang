import logo from './logo.svg';
import './App.css';


import Footer from './customer/components/Footer/Footer';
import HomePage from './customer/components/pages/HomePage/HomePage.jsx';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import AdminRouters from './Routers/AdminRouters.jsx';
import Registerform from './customer/Auth/Registerform.jsx';
import LoginForm from './customer/Auth/LoginForm.jsx';




function App() {
  console.log("App component render");
  return (
    <div className="App">
   

   <Routes>
    <Route path="/*" element={<CustomerRouters/>}></Route>
    <Route path="/admin/*" element={<AdminRouters/>}></Route>
  </Routes>


  
      
    </div>
   
  );
}

export default App;

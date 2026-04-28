import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getCart } from "../../../State/Cart/Action";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
console.log("Danh sách item thực tế trong UI:", cart?.cartItems);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  

  const handleCheckout = () => {  
      navigate("/checkout?step=2");  
  }

  // const calculateTotals = () => {
  //   let total = 0;
  //   let discount = 0;
  //   cart?.cartItems?.forEach(item => {
  //     total += item.product.price * item.quantity;
  //     discount += (item.product.price - item.product.discountedPrice) * item.quantity;
  //   });
  //   const shippingFee = 0; // Miễn phí vận chuyển
  //   const finalTotal = total - discount + shippingFee;
  //   return { total, discount, shippingFee, finalTotal };
  // };

  // const { total, discount, shippingFee, finalTotal } = calculateTotals();

  return (
    <div className="lg:px-16">
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
          {cart?.cartItems?.map((item) => (
    <CartItem key={item.id} item={item} />
  ))}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-5 rounded-md'>
            <p className='uppercase font-bold opacity-60 pb-4'>Chi tiết đơn hàng</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Tạm tính ({cart?.totalItem} sản phẩm)</span>
                <span>{cart?.totalPrice?.toLocaleString('vi-VN')} ₫</span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Giảm giá</span>
                <span className='text-green-600'>
                  -{cart?.discounte?.toLocaleString('vi-VN')} ₫
                </span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Phí vận chuyển</span>
                <span className='text-green-600'>Miễn phí</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Tổng cộng</span>
                <span className='text-green-600'>{cart?.totalDiscountedPrice?.toLocaleString('vi-VN')} ₫</span>
              </div>
            </div>
            <Button 
              onClick={handleCheckout}
              variant="contained" 
              className='w-full mt-5' 
              sx={{
                px: "2.5rem", 
                py: ".7rem", 
                bgcolor: "#9155fd",
                fontSize: "1rem"
              }}
            >
              Thanh toán ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
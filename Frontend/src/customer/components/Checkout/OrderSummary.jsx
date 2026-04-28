import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AdressCard />
      </div>

      <div >
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
          {[1,1,1].map((item, index) => <CartItem key={index} />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-5 rounded-md'>
            <p className='uppercase font-bold opacity-60 pb-4'>Chi tiết giá</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Giá</span>
                <span>{4697000..toLocaleString('vi-VN')} ₫</span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Giảm giá</span>
                <span className='text-green-600'>-{3419000..toLocaleString('vi-VN')} ₫</span>
              </div>
              <div className='flex justify-between pt-3'>
                <span>Phí vận chuyển</span>
                <span className='text-green-600'>Miễn phí</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Tổng cộng</span>
                <span className='text-green-600'>{1278000..toLocaleString('vi-VN')} ₫</span>
              </div>
            </div>
            <Button 
              variant="contained" 
              className='w-full mt-5' 
              sx={{
                px: "2.5rem", 
                py: ".7rem", 
                bgcolor: "#9155fd",
                fontSize: "1rem"
              }}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default OrderSummary

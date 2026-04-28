import { Grid2 } from '@mui/material';
import React from 'react'
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "Đang giao", value: "on_the_way" },
    { label: "Đã giao", value: "delivered" },
    { label: "Đã hủy", value: "cancelled" },
    { label: "Đã trả hàng", value: "returned" }
];

const Order = () => {
  return (
    <div className='px:5 lg:px-20'>
      <Grid2 container spacing={10}>
        <Grid2 item size={{ xs: 12, lg: 3 }}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top- text-left'>
                <h1 className='font-bold text-lg'>Bộ lọc</h1>
                
                <div className='space-y-4 mt-10 text-left'>
                <h1 className='font-semibold'>TRẠNG THÁI ĐƠN HÀNG</h1>

                {orderStatus.map((option) => (
                    <div className='flex items-center' key={option.value}>
                        <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                            {option.label}
                        </label>
                    </div>
                ))} 
            </div>
            </div>
        </Grid2>
        
        <Grid2 item size={{ xs: 12, lg: 9 }}>
            <div className='space-y-5 text-left'>
                {[1,1,1,1,1,1].map((item) => <OrderCard/>)}
            </div>
                    
        </Grid2>
    </Grid2>
    </div>
  )
}

export default Order

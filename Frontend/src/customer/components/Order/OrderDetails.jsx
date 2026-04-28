import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid2 } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Địa chỉ giao hàng</h1>
            <AdressCard/>
        </div>

        <div className='py-20'>
            <OrderTraker activeStep={3} />
        </div>

        <Grid2 className='space-y-5' container>
{[1,1,1,1,1].map((item)=> <Grid2 item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}} size={{ xs: 12}}>

                <Grid2 item size={{ xs: 12, lg: 10}}>
                    <div className='flex items-center space-x-4 text-left'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagdbrnyjfzhs8v.jpeg?q=70" alt="" />

                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Quần Jean Nam Dáng Slim Đen Cạp Trung</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Màu : hồng</span> <span>Kích thước : M</span></p>
                            <p>Người bán: linaria</p>
                            <p>{1099000..toLocaleString('vi-VN')} ₫</p>
                        </div>
                    </div>
                </Grid2>

                <Grid2 item size={{ xs: 12, lg: 2}}>
                    <div className='text-left'>
                        <Box sx={{color: 'deepPurple[500]'}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2' />
                        <span>Đánh giá & Nhận xét sản phẩm</span>
                        </Box>
                    </div>
                    
                </Grid2>
            </Grid2>)}
            
        </Grid2>

    </div>
  )
}

export default OrderDetails

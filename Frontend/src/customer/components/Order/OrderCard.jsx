import { Grid2 } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid2 container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid2 item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif@q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagdprnyjfzhs8v.jpeg?q=70" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className=''>Quần Jean Nam Dáng Slim Đen Cạp Trung</p>
                    <p className='opacity-50 text-xs font-semibold'>Kích thước: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Màu sắc: Đen</p>
                </div>
            </div>
        </Grid2>

        <Grid2 item xs={2}>
            <p>{1099000..toLocaleString('vi-VN')} ₫</p>
        </Grid2>

        <Grid2 item xs={4}>
            {true && <div>
                <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Đã giao vào ngày 03 tháng 3
                    </span>
                </p>
                <p className='text-xs'>
                    Sản phẩm của bạn đã được giao
                </p>
            </div>}
            {false && <p>
                <span>
                    Dự kiến giao vào ngày 03 tháng 3
                </span>
            </p>}
        </Grid2>


     </Grid2>
    </div>
  )
}

export default OrderCard

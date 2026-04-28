import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = { 
      cartItemId: item?.id, 
      data: { quantity: item.quantity + num } 
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item?.id));
  };
  return (
    <div className='p-5 shadow-lg border rounded-md mb-3'>
      <div className='flex items-start'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img 
            className='w-full h-full object-cover object-top' 
            src={item?.product?.imageUrl} 
            alt={item?.product?.title} 
          />
        </div>

        <div className='ml-5 space-y-1 w-full'>
          {/* Lấy tên thật từ Backend */}
          <p className='font-semibold text-left'>{item?.product?.title}</p>
          
          {/* Lấy Size và Màu thật */}
          <p className='opacity-70 text-left'>
            Kích thước: {item?.size}, Màu: {item?.product?.color || "Tiêu chuẩn"}
          </p>
          
          {/* Lấy Brand (Người bán) thật */}
          <p className='opacity-70 mt-2 text-left'>Người bán: {item?.product?.brand}</p>
          
          <div className='flex space-x-5 items-center text-lg lg:text-lg text-gray-900 mt-6 justify-start'>
            {/* Giá sau khi giảm */}
            <p className='font-semibold'>
                {item?.discountedPrice?.toLocaleString('vi-VN')} ₫
            </p>
            
            {/* Giá gốc */}
            <p className='opacity-50 line-through'>
                {item?.price?.toLocaleString('vi-VN')} ₫
            </p>
            
            {/* Phần trăm giảm giá */}
            <p className='text-green-600 font-semibold'>
                Giảm {item?.product?.discountPersent}%
            </p>
          </div>
        </div>
      </div>

      <div className='lg:flex items-center lg:space-x-10 pt-4 justify-start'>
        <div className='flex items-center space-x-2'>
          <IconButton 
            onClick={() => handleUpdateCartItem(-1)} 
            disabled={item?.quantity <= 1} // Không cho giảm xuống dưới 1
            sx={{ color: 'RGB(145 85 253)' }}
          >
            <RemoveCircleOutlineIcon/>
          </IconButton>
          
          <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
          
          <IconButton 
            onClick={() => handleUpdateCartItem(1)} 
            sx={{ color: 'RGB(145 85 253)' }}
          >
            <AddCircleOutlineIcon/>
          </IconButton>
        </div>
        
        <div className='mt-2 lg:mt-0'>
          <Button onClick={handleRemoveCartItem} sx={{ color: 'RGB(145 85 253)' }}>
            Xóa
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
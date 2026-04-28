import React from "react";
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate=useNavigate();
  // Trong file Card của bạn
  const handleNavigate = () => {
      navigate(`/product/${product.id}`); // Nó phải là product.id để lấy 305
  };
  return (
    // ĐÚNG: Click vào sản phẩm nào, lấy đúng ID sản phẩm đó
      <div onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice.toLocaleString('vi-VN')} ₫</p>
          <p className="line-through opacity-50">{product.price.toLocaleString('vi-VN')} ₫</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% Giảm</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product?.id}`)} // Điều hướng đến trang chi tiết
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden 
      w-[15rem] mx-3 border hover:scale-105 transition-all duration-300" // Thêm hiệu ứng hover cho xịn
    >
      <div className="h-[13rem] w-[10rem] mt-3">
        <img
          className="object-cover object-top w-full h-full rounded-md"
          src={product?.imageUrl} // Dùng optional chaining ?. để tránh lỗi
          alt={product?.title}
        />
      </div>

      <div className="p-4 w-full">
        {/* Thương hiệu */}
        <h3 className="text-lg font-bold text-gray-900 text-left truncate">
          {product?.brand}
        </h3>

        {/* Tên sản phẩm */}
        <p className="mt-1 text-sm text-gray-500 text-left line-clamp-2 h-[2.5rem]">
          {product?.title}
        </p>

        {/* Hiển thị giá từ Backend */}
        <div className="flex items-center space-x-2 mt-2">
          <p className="font-semibold text-red-600">
            {product?.discountedPrice?.toLocaleString('vi-VN')}₫
          </p>
          <p className="text-xs opacity-50 line-through">
            {product?.price?.toLocaleString('vi-VN')}₫
          </p>
          <p className="text-xs text-green-600 font-semibold">
            {product?.discountPersent}% Off
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
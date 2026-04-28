"use client";

import { Box, Button, Grid2, LinearProgress } from "@mui/material";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import {  Radio, RadioGroup } from "@headlessui/react";
import { colors, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import ProductCard from "../Product/ProductCard";
import { addItemToCart } from "../../../State/Cart/Action";
// import { useDispatch } from 'react-redux'; // Đảm bảo dòng này bị comment nếu không sử dụng
// import { addItemToCart } from '../../../State/Cart/Action'; // Đảm bảo dòng này bị comment nếu không sử dụng

// const product = {
//   name: "Áo phông cơ bản 6 chiếc",
//   price: "192.000 ₫",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Nam", href: "#" },
//     { id: 2, name: "Quần áo", href: "#" },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
  
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
    
//   ],
//   description:
//     'Bộ áo phông cơ bản 6 chiếc giúp bạn thể hiện cá tính sôi động của mình với ba lựa chọn màu xám. Cảm thấy thích phiêu lưu? Mặc một chiếc áo phông màu xám thạch. Muốn trở thành người tạo xu hướng? Hãy thử màu sắc độc quyền của chúng tôi: "Đen". Cần thêm một chút màu sắc nổi bật cho trang phục của bạn? Chiếc áo phông trắng của chúng tôi sẽ giúp bạn.',
//   highlights: [
//     "Cắt và may thủ công tại địa phương",
//     "Nhuộm bằng màu độc quyền của chúng tôi",
//     "Giặt trước & không co rút",
//     "100% cotton siêu mềm mại",
//   ],
//   details:
//     'Gói 6 chiếc bao gồm hai chiếc màu đen, hai chiếc màu trắng và hai chiếc màu xám thạch. Đăng ký dịch vụ thuê bao của chúng tôi và là người đầu tiên nhận được những màu sắc mới, thú vị, như phiên bản giới hạn "Xám than" sắp ra mắt của chúng tôi.',
// };
// const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const { product, products } = useSelector((store) => store.products); // Lấy state từ store.auth
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const {productId} = useParams();
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    const data = { productId: productId };
    dispatch(findProductsById(data));
}, [productId, dispatch]);
  useEffect(() => {
      if (product) {
        setSelectedColor(product.colors?.[0]); // Chọn màu đầu tiên nếu có
        setSelectedSize(product.sizes?.[0]);   // Chọn size đầu tiên nếu có
      }
    }, [product]);
  const handleAddToCart = () => {  
    // const data = {productId, size:selectedSize.name, color:selectedColor.name}
    // dispatch(addItemToCart(data)); // Đảm bảo dòng này bị comment nếu không sử dụng
    const data = {
      productId: productId, // Lấy từ useParams()
      size: selectedSize.name, // Lấy tên size từ state selectedSize
      quantity: 1, // Mặc định là 1
    };

    console.log("Dữ liệu gửi lên Cart:", data);

    // Thực hiện gọi Action
    dispatch(addItemToCart(data));
    
      navigate("/cart");  
  }
// if (! product) {
//     return (
//       <Box sx={{ width: '100%', mt: 10, px: 20 }}>
//         <p className="text-center pb-5">Đang tải thông tin sản phẩm...</p>
//         <LinearProgress />
//       </Box>
//     );
// }
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm font-medium text-gray-900">
              {product?.category?.name || "Sản phẩm"}
            </li>
            <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <li className="text-sm font-medium text-gray-500">{product?.title}</li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            {/* Ảnh lớn hiển thị đầu tiên */}
            <div className="overflow-hidden rounded-lg max-w-[35rem] max-h-[35rem]">
              <img
                src={ product?.imageUrl}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Danh sách ảnh nhỏ */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              { product?.images?.map((item) => (
                <div
                  key={item.src}
                  className="aspect-square w-[5rem] h-[5rem] overflow-hidden rounded-lg"
                >
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                  { product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                  { product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Thông tin sản phẩm</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-lg lg:text-xl text-gray-900 mt-6">
              <p className="font-semibold">
                  { product?.discountedPrice?.toLocaleString('vi-VN')}đ
              </p>
              <p className="opacity-50 line-through">
                  { product?.price?.toLocaleString('vi-VN')}đ
              </p>
              <p className="text-green-600 font-semibold">
                  { product?.discountPersent}% Off
              </p>
              </div>

              {/* Reviews */}
              <div className="mt-6 ">
              <div className="flex items-center space-x-3">
              <Rating name="read-only" value={5.5} readOnly />
              <p className="opacity-50 text-sm">56540 Đánh giá</p>
              <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">3870 Lượt xem</p>
              </div>
              </div>

              <form className="mt-10">
               
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Kích thước</h3>
                    
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="grid grid-cols-4 gap-4 mt-4">
                  {product?.sizes?.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.quantity || size.quantity <= 0}
                      className={({ checked }) =>
                        classNames(
                          checked ? "bg-indigo-600 text-white" : "bg-white text-gray-900",
                          "cursor-pointer flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase"
                        )
                      }
                    >
                      {size.name}
                    </Radio>
                  ))}
                </RadioGroup>
                  </fieldset>
                </div>
                <div className="text-left">
                <Button onClick={handleAddToCart} variant="contained" sx={{ mt: 5, px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                THÊM VÀO GIỎ HÀNG
              </Button>
                </div>
                
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Mô tả</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 text-left">
                    { product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900 text-left">
                  Điểm nổi bật
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product?.highlights?.map((highlight) => (
                      <li key={highlight} className="text-gray-400 text-left">
                        <span className="text-gray-600 ">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900 text-left">
                  Chi tiết
                </h2>

                <div className="mt-4 space-y-6 text-left">
                  <p className="text-sm text-gray-600">{product?.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and reviews */}
        <section className="px-4 pt-10">
          <h1 className="font-semibold text-left text-lg pb-4">Đánh giá & Xếp hạng gần đây</h1>
          <div className="border p-5">
            <Grid2 container spacing={100}> {/* Tăng spacing từ 4 lên 8 để tạo khoảng cách lớn hơn */}
              {/* Cột reviews - chiếm 7/12 không gian */}
              <Grid2 item xs={12} md={7}>
                <div className="space-y-5">
                  {[1,1,1].map((item, index) => <ProductReviewCard key={index}/>)}
                </div>
              </Grid2>
              
              {/* Cột Product Ratings - chiếm 5/12 không gian và nằm bên phải */}
              <Grid2 item xs={12} md={5}>
                <div className="pl-0 md:pl-12 "> {/* Tăng padding-left trên màn hình medium và lớn hơn */}
                  <h1 className="text-xl font-semibold pb-1 text-left">Xếp hạng sản phẩm</h1>
                  <div className="flex items-center space-x-3">
                    <Rating name="read-only" value={ product?.numRatings > 0 ? 4.5 : 0} readOnly />
                    <p className="opacity-50 text-sm">{ product?.numRatings} Đánh giá</p>
                    <p className="ml-3 text-sm font-medium text-indigo-600">
                      { product?.numViews || 0} Lượt xem
                    </p>
                  </div>

                  {/* Rating bars */}
                  {[
                    { label: "Xuất sắc", value: 90,  color: "success" },
                    { label: "Rất tốt", value: 75,  color: "primary" },
                    { label: "Tốt", value: 60,  color: "primary" },
                    { label: "Trung bình", value: 40,  color: "warning" },
                    { label: "Kém", value: 15,  color: "error" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <span className="w-20 text-sm text-gray-600">{item.label}</span>
                      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <LinearProgress
                          sx={{
                            flexGrow: 1,
                            height: 8,
                            width:300,
                            borderRadius: 4,
                            backgroundColor: '#f0f0f0',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: item.color === 'success' ? '#4caf50' : 
                                              item.color === 'primary' ? '#1976d2' :
                                              item.color === 'warning' ? '#ff9800' : '#f44336'
                            }
                          }}
                          variant="determinate"
                          value={item.value}
                        />
                      </Box>
                      <span className="ml-2 text-xs text-gray-500 w-12 text-right">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Grid2>
            </Grid2>
          </div>
        </section>

        {/* Similar Products */}
        <section className="pt-10">
            <h1 className="py-5 text-xl font-bold">Sản phẩm tương tự</h1>
            <div className="flex flex-wrap space-y-5">
                {products?.content?.map((item) => <ProductCard product={item} />)}
            </div>
        </section>
      </div>
    </div>
  );
}

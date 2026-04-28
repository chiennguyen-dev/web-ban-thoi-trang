import React, { useEffect } from 'react'
import MainCrosel from '../../HomeCarosel/MainCrosel'
import HomeSectionCard from '../../HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../HomeSectionCarosel/HomeSectionCarosel'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts, findProductsById } from '../../../../State/Product/Action'



const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  useEffect(() => {
    // 1. Khai báo bộ lọc để lấy sản phẩm cho trang chủ
    const data = {
      category: "", // Để rỗng để lấy tất cả, hoặc "women_shirt" nếu chỉ muốn hiện áo
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: ""
    };

    // 2. PHẢI CÓ DÒNG NÀY thì trang chủ mới tự đi lấy dữ liệu được
    dispatch(findProducts(data));
    
  }, [dispatch]); // Chạy 1 lần duy nhất khi vừa vào web
  return (
    <div>
      <MainCrosel/>

        <HomeSectionCarousel 
          data={products?.content} 
          sectionName={"Sản phẩm bán chạy"} 
      />
      
      <HomeSectionCarousel 
          data={products?.content?.filter(item => item.category.name === 'women_shirt')} 
          sectionName={"Sản phẩm mới nhất"} 
      />

    </div>
  )
}

export default HomePage

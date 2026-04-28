import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { mainCarouselData } from './MainCaroselData'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {

    const items = mainCarouselData.map((item) => (
        <img 
            className='cursor-pointer w-full object-cover object-top h-[15rem] md:h-[30rem] lg:h-[40rem]' 
            role='presentation' 
            src={item.image} 
            alt=""
        />
    ));


  return (
    <div className="-z-10 relative"> {/* Thêm z-index thấp để không đè lên Menu */}
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000} // Tăng lên 2s cho người ta kịp nhìn ảnh Chiến ơi
                infinite
                disableDotsControls // Tắt dấu chấm nếu muốn nhìn tối giản hơn
            />
        </div>
  )
}

export default MainCrosel;

import React from 'react'
import teen1 from '../../public/teen1.jpg'
import teen2 from "../../public/teen2.jpg";
import teen3 from "../../public/teen3.jpg";
import teen4 from "../../public/teen4.jpg";
import teen5 from "../../public/teen5.jpg";
import teen6 from "../../public/teen6.jpg";
import teen7 from "../../public/teen7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Attendes = () => {
  return (
    <div>
      <div className="flex justify-center py-[40px]">
        <h3 className="font-bold lg:text-[40px] text-center xs:w-[] lg:w-[712px]">
          Check out pictures from previous sessions
        </h3>
      </div>

      <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
        
          <SwiperSlide>
            <img src={teen1} alt="ICON" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={teen2} alt="ICON" />
          </SwiperSlide>
      
        <SwiperSlide>
          <img src={teen3} alt="ICON" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={teen4} alt="ICON" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={teen5} alt="ICON" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={teen6} alt="ICON" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={teen7} alt="ICON" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Attendes
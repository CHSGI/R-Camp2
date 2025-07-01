import React from 'react'
import heart from '../../public/heart.svg'
import bible from "../../public/bible.svg";
import micp from "../../public/micp.svg";
import people from "../../public/people.svg";
import worship from "../../public/worship.svg";
import cont1 from '../../public/cont1.svg'
import cont2 from '../../public/cont2.svg'
import cont3 from '../../public/cont3.svg'
import cont4 from '../../public/cont4.svg'
import cont5 from '../../public/cont5.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";




const Excited = () => {



  return (
    <main className="py-[60px] bg-[#FFFFFF]">
      <div className="flex justify-center">
        <h3 className="font-bold xs:text-[34px] lg:text-[40px] text-[#333333] xs:w-[343px] lg:w-[578px] text-center">
          Stay Excited, We have got a lot of activities for you
        </h3>
      </div>

      <p className="text-center text-[16px] font-normal xs:px-[16px] lg:px-[100px] pt-[16px]">
        At The Refulgence Camp 2025, we go beyond the spiritual, equipping young
        minds with essential life skills, mentorship, and practical tools to
        excel for every participant.. This is a holistic experience where faith
        meets fun, where friendships are forged, and where destinies are shaped
      </p>

      {/* <div className="xs:block lg:flex">
        <div className="xs:w-[] lg:w-[]  border-[1px]  px-[64px] py-[43px]">
          <img src={heart} alt="ICON" />
          <p>Quiet Time</p>
        </div>
        <div>
          <img src={worship} alt="ICON" />
          <p>Worship</p>
        </div>
        <div>
          <img src={bible} alt="ICON" />
          <p>Mind-Blowing Word Sessions and Real Talk Panels</p>
        </div>
        <div>
          <img src={people} alt="ICON" />
          <p>Bible Study Breakouts</p>
        </div>
        <div>
          <img src={micp} alt="ICON" />
          <p>Talent Showcase</p>
        </div>
      </div> */}
      <div className="xs:hidden lg:flex gap-[10px] justify-center pt-[24px]">
        <img src={cont1} alt="ICON" />
        <img src={cont2} alt="ICON" />
        <img src={cont3} alt="ICON" />
        <img src={cont4} alt="ICON" />
        <img src={cont5} alt="ICON" />
      </div>
      <div className='lg:hidden px-[50px] pt-[24px]'>
        <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
          <SwiperSlide>
            <img src={cont1} alt="ICON" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cont2} alt="ICON" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cont3} alt="ICON" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cont4} alt="ICON" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cont5} alt="ICON" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Excited
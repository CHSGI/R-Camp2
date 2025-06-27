import React from 'react'
import { IoIosArrowForward } from "react-icons/io";



const Hero = () => {
  return (
    <div className="bg-[url('/heroimg.svg')] xs:pl-[16px] xsm:pl-[30px] lg:pl-[100px] xs:pt-[160px]  lg:pt-[149px] xs:pb-[160px] lg:pb-[206px] text-white bg-no-repeat bg-cover">
      <h3 className="xs:text-[11px] lg:text-[16px] font-semibold xs:pb-[4px] lg:pb-[8px]">
        4th & 5th September | Abeokuta,Nigeria
      </h3>
      <h3 className=" xs:w-[269px] lg:w-[444px] xs:text-[44px] xsm:text-[48px] lg:text-[74px] xs:leading-[47px] lg:leading-[78px] font-semibold">
        The Refulgence Camp 2025
      </h3>
      <p className="xs:w-[348px] lg:w-[575px] xs:text-[12px] lg:text-[20px] xs:leading-[15px] lg:leading-[24px] pt-[14px] font-semibold">
        An immersive teens summer escape for bold dreamers, rising leaders and
        the not-so-churchy teens finding their spark.
      </p>
      <div className="flex gap-[16px] pt-[16px]">
        <div className="xs:text-[8px] xsm:text-[10px] lg:text-[14px] font-semibold flex items-center border-[1px] xs:w-[88px] lg:w-[145px] xs:h-[24px] lg:h-[40px] justify-center rounded-[16px] hover:bg-[#178A2D] border-[#178A2D]">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Register
          </a>
          <IoIosArrowForward className="items-center" />
        </div>
        <div className=" bg-white xs:text-[8px] xsm:text-[10px] lg:text-[14px] font-semibold flex items-center border-[1px] xs:w-[112px] lg:w-[186px] xs:h-[24px] lg:h-[40px] justify-center">
          <a
            className="text-[#178A2D]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a sponsor
          </a>
          <IoIosArrowForward className="items-center" />
        </div>
      </div>
    </div>
  );
}

export default Hero
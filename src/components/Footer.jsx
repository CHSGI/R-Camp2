import React from "react";
import logo from '../../public/logofooter.svg'
import iglogo from '../../public/iglogo.svg'
import xlogo from "../../public/xlogo.svg";
import maillogo from "../../public/maillogo.svg";

const Footer = () => {
  return (
    <main>
      <div className="bg-[url('/Timer.svg')] bg-no-repeat bg-cover xs:py-[107px] lg:py-[130px] xs:px-[16px] lg:px-0">
        <h3 className="text-center text-[36px] font-semibold text-white">
          Do not miss out on this Event
        </h3>
        <div className="flex justify-center  pt-[10px]">
          <a
            className="font-semibold w-[250px] text-center rounded-[32px]  bg-[#B5CE48] py-[14px] text-[#333333]"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </div>
      <div className="bg-[#101611]  xs:px-[16px] lg:px-[100px] py-[48px]">
        <div className="xs:block lg:flex justify-between items-center">
          <img src={logo} alt="IMAGE" />

          <ul className="xs:block lg:flex gap-[62px] text-[#B0C5D6] text-[16px] font-normal xs:pt-[24px] lg:pt-0">
            <li className="xs:pb-[16px] lg:pb-0">About</li>
            <li className="xs:pb-[16px] lg:pb-0">Sponsors</li>
            <li className="xs:pb-[16px] lg:pb-0">Store</li>
            <li>Exhibitors</li>
          </ul>
          <div className="xs:pt-[24px] lg:pt-0  flex gap-[32px]">
            <img src={iglogo} alt="ICON" />
            <img src={xlogo} alt="ICON" />
            <img src={maillogo} alt="ICON" />
          </div>
        </div>
        <p className=" lg:text-center font-normal xs:text-[12px] lg:text-[16px] text-[#627587] pt-[24px]">
          Copyright © 2025 Refulgence camp. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;

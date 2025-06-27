import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import whoweare from '../../public/whoarewe.svg'
import icon1 from '../../public/icon1.svg'
import { GoArrowDownRight } from "react-icons/go";


const Whoarewe = () => {
  return (
    <section>
      <main className="xs:block lg:flex items-center gap-[32px] pt-[80px] xs:pl-[16px] lg:pl-[80px] xs:pr-[16px] lg:pr-[104px]">
        <div>
          <h3 className="xs:text-[32px] lg:text-[40px] font-semibold">
            Who are we?
          </h3>
          <p className="xs:w-[343px] lg:w-[584px] xs:text-[16px] lg:text-[18px] font-normal xs:leading-[166%] text-[#777788]">
            Last year, hundreds of students, preteens, and teenagers gathered
            under one roof not for hype, but hearts set ablaze for purpose,
            passion, and pursuit of God. Not for fun alone, but for fire. Here,
            broken hearts find healing, confused minds find clarity, and
            distracted lives find direction.
          </p>
          <div className="flex items-center border-[1px] w-[250px] h-[48px] justify-center rounded-[32px] hover:bg-[#178A2D] border-[#178A2D] mt-[16px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Register
            </a>
            <IoIosArrowForward className="items-center" />
          </div>
        </div>
        <div className="relative xs:mt-[32px] lg:mt-0">
          <img
            className="absolute xs:right-[-2%] lg:right-[-6%] xs:top-[-4%] lg:top-[-6%] xs:w-[15%]"
            src={icon1}
            alt="ICON"
          />
          <img className="relative z-10" src={whoweare} alt="IMAGE" />
          <img
            className="absolute z-10 xs:left-[-2%] lg:left-[-6%] xs:bottom-[-8%] lg:bottom-[-6%] xs:w-[20%]"
            src={icon1}
            alt="ICON"
          />
        </div>
      </main>
      <h3 className="xs:pt-[80px] lg:pt-[80px] xs:text-[32px] lg:text-[40px] font-bold text-center">
        What is Refulgence Camp 2025?
      </h3>
      <div className="flex justify-center text-center pt-[15px]">
        <p className="xs:text-[15px] lg:text-[18px] font-normal xs:w-[343px] lg:w-[874px] leading-[150%]">
          At The Refulgence Camp 2025, we go beyond the spiritual, equipping
          young minds with essential life skills, mentorship, and practical
          tools to excel for every participant.. This is a holistic experience
          where faith meets fun, where friendships are forged, and where
          destinies are shaped.
        </p>
      </div>
      <main className="xs:px-[28px] lg:px-[100px] pt-[40px]">
        <div className=" xs:block lg:flex justify-between border-b-[1px] border-b-[#DDDDDD] xs:pt-[44px] lg:pt-[24px]">
          <div className="flex items-center xs:gap-[8px] lg:gap-[20px]">
            <p className="font-bold text-[20px]">01</p>
            <h3 className="font-bold xs:text-[22px] lg:text-[30px]">
              Spiritual awakening
            </h3>
          </div>

          <div className=" flex gap-[90px] items-center xs:pb-[44px] lg:pb-[24px] ">
            <p className="xs:pt-[8px] lg:pt-0 xs:w-[319px] lg:w-[499px] xs:text-[16px] lg:text-[18px]">
              Immersive yourself in a sacred space to encounter God personally
              not just through sermons, but through intentional worship, quiet
              reflection, and real-life application of faith that stick long
              after camp ends.
            </p>
            <GoArrowDownRight className="xs:hidden lg:block" />
          </div>
        </div>
        <div className="xs:block lg:flex justify-between  border-b-[1px] border-b-[#DDDDDD] xs:pt-[44px] lg:pt-[24px]">
          <div className="flex items-center xs:gap-[8px] lg:gap-[20px]">
            <p className="font-bold text-[20px]">02</p>
            <h3 className="font-bold xs:text-[22px] lg:text-[30px]">
              Life & Leadership skills
            </h3>
          </div>

          <div className=" flex gap-[90px] items-center xs:pb-[44px] lg:pb-[24px] ">
            <p className="xs:pt-[8px] lg:pt-0  xs:w-[319px] lg:w-[499px] xs:text-[16px] lg:text-[18px]">
              Discover and build real-life skills and tools you actually need to
              thrive, make bold moves, and navigate the world you’re growing up
              in with confidence. 
            </p>
            <GoArrowDownRight className="xs:hidden lg:block" />
          </div>
        </div>
        <div className="xs:block lg:flex justify-between  border-b-[1px] border-b-[#DDDDDD] xs:pt-[44px] lg:pt-[24px]">
          <div className="flex items-center xs:gap-[8px] lg:gap-[20px]">
            <p className="font-bold text-[20px]">03</p>
            <h3 className="font-bold xs:text-[22px] lg:text-[30px]">
              Amplify Your Talent
            </h3>
          </div>

          <div className=" flex gap-[90px] items-center xs:pb-[44px] lg:pb-[24px] ">
            <p className="xs:pt-[8px] lg:pt-0  xs:w-[319px] lg:w-[499px] xs:text-[16px] lg:text-[18px]">
              Engage in workshops, interactive exhibitions and showcases from
              technology to creative projects. A perfect place to express your
              gifts and dreams.
            </p>
            <GoArrowDownRight className="xs:hidden lg:block" />
          </div>
        </div>
        <div className="xs:block lg:flex justify-between  border-b-[1px] border-b-[#DDDDDD] xs:pt-[44px] lg:pt-[24px]">
          <div className="flex items-center xs:gap-[8px] lg:gap-[20px]">
            <p className="font-bold text-[20px]">04</p>
            <h3 className="font-bold xs:text-[22px] lg:text-[30px]">
              Hands-On Learning
            </h3>
          </div>

          <div className=" flex gap-[90px] items-center xs:pb-[44px] lg:pb-[24px] ">
            <p className="xs:pt-[8px] lg:pt-0  xs:w-[319px] lg:w-[499px] xs:text-[16px] lg:text-[18px]">
              Dive into interactive exhibits, creative workshops, and cool
              experiments that make science, tech, engineering, and the arts
              come alive. No boring lectures, just real fun for curious minds
              ready to explore!
            </p>
            <GoArrowDownRight className="xs:hidden lg:block" />
          </div>
        </div>
        <div className="xs:block lg:flex justify-between  border-b-[1px] border-b-[#DDDDDD] xs:pt-[44px] lg:pt-[24px]">
          <div className="flex items-center xs:gap-[8px] lg:gap-[20px]">
            <p className="font-bold text-[20px]">05</p>
            <h3 className="font-bold xs:text-[22px] lg:text-[30px]">
              Mentorship
            </h3>
          </div>

          <div className=" flex gap-[90px] items-center xs:pb-[44px] lg:pb-[24px] ">
            <p className="xs:pt-[8px]   xs:w-[319px] lg:w-[499px] xs:text-[16px] lg:text-[18px] lg:pt-[24px]">
              Meet real-life role models, mentors, and visionary brands who’ll
              spark your creativity, guide your next steps, and show you what’s
              truly possible in STEAMS careers and in your journey to becoming
              everything you’re meant to be.
            </p>
            <GoArrowDownRight className="xs:hidden lg:block" />
          </div>
        </div>
      </main>
      <main className='xs:block lg:flex gap-[10px] bg-[url("/Numbers.svg")] bg-no-repeat bg-cover xs:mt-[] lg:mt-[80px] xs:px-[32px] lg:px-[100px] py-[60px]'>
        <div className="xs:py-[18px] lg:py-[65px] xs:px-[] lg:px-[47px] border-[1px] bg-white block border-none rounded-[10px] xs:mb-[24px] lg:mb-0">
          <h3 className="text-center font-semibold text-[64px] text-[#178A2D]">
            500+
          </h3>
          <p className="font-normal text-[16px] text-center">Teenagers</p>
        </div>
        <div className="xs:py-[18px] lg:py-[65px] xs:px-[] lg:px-[32px] border-[1px] bg-white block border-none rounded-[10px] xs:mb-[24px] lg:mb-0 ">
          <h3 className="text-center font-semibold text-[64px] text-[#178A2D]">
            10+
          </h3>
          <p className="font-normal text-[16px] text-center">
            Brand Partnersand Individuals
          </p>
        </div>
        <div className="xs:py-[18px] lg:py-[65px] xs:px-[] lg:px-[100px] border-[1px] bg-white block border-none rounded-[10px] xs:mb-[24px] lg:mb-0 ">
          <h3 className="text-center font-semibold text-[64px] text-[#178A2D]">
            10+
          </h3>
          <p className="font-normal text-[16px] text-center">Speakers</p>
        </div>
        <div className="xs:py-[18px] lg:py-[65px] xs:px-[] lg:px-[104px] border-[1px] bg-white block border-none rounded-[10px]">
          <h3 className="text-center font-semibold text-[64px] text-[#178A2D]">
            7+
          </h3>
          <p className="font-normal text-[16px] text-center">Sessions</p>
        </div>
      </main>
    </section>
  );
}

export default Whoarewe
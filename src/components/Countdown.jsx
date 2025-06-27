
import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeFormat = (num) => String(num).padStart(2, "0");

    return (
      <main className="xs:bg-[url('/Timer2.svg')] lg:bg-[url('/Timer.svg')] bg-no-repeat bg-cover  xs:block lg:flex lg:items-center gap-[164px] py-[40px] xs:px-[16px] lg:px-[80px]">
        <h3 className="xs:text-[21px] text-center lg:text-[33px] xs:w-[343px] lg:w-[536px] font-semibold text-white leading-[100%] ">
          Each Second, One Step Closer to His Presence!
        </h3>
        <div className="flex justify-center xs:pt-[16px] lg:pt-0 text-white">
          {Object.keys(timeLeft).length > 0 ? (
            <div className=" flex gap-[48px]">
              <div className="block justify-center">
                <span className="text-[32px] font-semibold leading-[24px]">
                  {timeFormat(timeLeft.days)}
                </span>{" "}
                <p className="xs:text-[10px] lg:text-[12px] xs:font-normal lg:font-semibold">
                  Days
                </p>
              </div>
              <div className="block justify-center">
                <span className="text-[32px] font-semibold leading-[24px]">
                  {timeFormat(timeLeft.hours)}
                </span>{" "}
                <p className="xs:text-[10px] lg:text-[12px] xs:font-normal lg:font-semibold ">
                  Hours
                </p>
              </div>
              <div className="block justify-center">
                <span className="text-[32px] font-semibold leading-[24px] text-center">
                  {timeFormat(timeLeft.minutes)}
                </span>{" "}
                <p className="xs:text-[10px] lg:text-[12px] xs:font-normal lg:font-semibold ">
                  Minutes
                </p>
              </div>
              <div className="block justify-center">
                <span className="text-[32px] font-semibold leading-[24px]">
                  {" "}
                  {timeFormat(timeLeft.seconds)}
                </span>{" "}
                <p className="xs:text-[10px] lg:text-[12px] xs:font-normal lg:font-semibold ">
                  Seconds
                </p>
              </div>
            </div>
          ) : (
            <p>🎉 Countdown complete!</p>
          )}
        </div>
      </main>
    );
};

export default Countdown;

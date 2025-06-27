import React from "react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Whoarewe from "../components/Whoarewe";

const Homepage = () => {
      const eventDate = "2025-07-01T15:00:00";


    return (
      <div className="">
        <Hero />
            <Countdown targetDate={eventDate} />
            <Whoarewe/>
      </div>
    );
};

export default Homepage;

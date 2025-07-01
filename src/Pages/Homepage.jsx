import React from "react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Whoarewe from "../components/Whoarewe";
import Whocanjoin from "../components/Whocanjoin";
import Sponsor from "../components/Sponsor";
import Excited from "../components/Excited";
import Navbar from "../components/Navbar";
import Attendes from "../components/Attendes";

const Homepage = () => {
  const eventDate = "2025-08-01T15:00:00";

  return (
    <div className="">
      <Hero />
      <Countdown targetDate={eventDate} />
      <Whoarewe />
      <Whocanjoin />
      <Excited />
      <Attendes/>
      <Sponsor />
    </div>
  );
};

export default Homepage;

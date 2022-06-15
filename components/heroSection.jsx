import React from "react";
import Image from "next/image";
import Logo from "./page/index/logo";

const HeroSection = () => {
  return (
    <div
      className="p-16 w-full h-[80vh] relative bg-no-repeat bg-cover"
      style={{ background: "url(/images/heroBG.jpg)" }}
    >
      <Image src={"/images/heroBG.jpg"} layout={"fill"} objectFit={"cover"} />
      <span className="z-0 bg-gray-900/70 w-full h-full absolute top-0 left-0"></span>

      <div className="w-1/2">
        <h1 className="text-5xl relative text-white font-bold">
          Unlimited films,
          <br /> TV programmes and more.
        </h1>
        <p className="text-white relative text-2xl py-8">
          Enjoy on your TV. Watch on smart TVs, PlayStation, Xbox, Chromecast,
          Apple TV, Blu-ray players and more. Save your favourites easily and
          always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

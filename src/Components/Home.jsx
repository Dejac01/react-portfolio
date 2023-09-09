import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Home() {
  const [hom, setHom] = useState(false);
  const handleClick = () => setHom(!hom);

  return (
    <div name="home" className="w-full h-screen bg-[#5e636a]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          De`ja Craft
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Software/Data Engineer, and Writer.
        </h2>
        <p className="text-pink-300 py-4 max-w-[700px]">
          I specialize in crafting and conceptualizing outstanding digital
          experiences and visualizations. Feel free to explore!
        </p>
        <div>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="text-pink-400 group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-pink-300 animate-pulse">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#5e636a] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm De`ja`, nice to meet you! Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate bout the realms of writing, creativity, software,
              and data engineering, with a strong commitment to crafting
              meaningful applications, systems, and software solutions. I am a
              current member of the Honor Society, and am presently pursuing a
              dual major in Computer Science and Mathematics at Louisiana State
              University Online, and previously earned an Associates degree in
              Business Administration. My journey has included notable speaking
              engagements in the tech industry, as well as being prominently
              featured in various publications. I look forward to the
              opportunity to connect, either through the link below or my
              LinkedIn profile!
            </p>
            <div>
              <a href="http://voyageatl.com/interview/rising-stars-meet-deja-craft-of-norcross/ ">
                <p className="p">VoyageATL Feature</p>
              </a>
            </div>
            <div>
              <a href="https://femimagazine.com/?p=8783 ">
                <p className="p">FemiMagazine Feature</p>
              </a>
            </div>
            <div>
              <a href="https://shoutoutatlanta.com/meet-deja-craft-software-engineer-and-published-writer/ ">
                <p className="p">ShoutoutAtlanta Feature</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

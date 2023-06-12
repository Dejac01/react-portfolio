import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#5e636a] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-300">
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
              I am passionate about writing, creativity and building excellent
              front end applications that deliver a memorable digital
              experience. I specialize in Front End Development and Digital
              Marketing with UX/UI. I am currently majoring in Computer Science
              and Mathematics at Louisiana State University Online and hold an
              Associates degree in Business Administration.
            </p>
            <div>
              <a href="http://voyageatl.com/interview/rising-stars-meet-deja-craft-of-norcross/ ">
                <p className="p">Read more about my story here!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

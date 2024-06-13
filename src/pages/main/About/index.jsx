import React from "react";
import bg_7 from "../../../assets/images/bg_7.png";
function About() {
  return (
    <div>
      <div className="relative">
        <div
          className="w-full h-[750px] bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(${bg_7})`,
          }}
        />
        <div className="w-[530px] absolute top-[300px] right-[100px]">
          <span className="flex justify-start items-start text-[60px] font-bold text-[#fff]">
            About Us
          </span>
        </div>
      </div>
      <div className="mx-[130px]">
        <div className="flex items-center my-28">
          <div className="w-[45%] h-[650px] bg-[#c4c4c4]" />
          <div className="w-[60%] px-28">
            <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
              Who are we?
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
              ArtSpectrum is an online platform dedicated to the sale of art
              paintings, offering you a captivating and creative experience in
              the world of art. Our goal is to become an excellent online
              destination for you to explore and shop for unique and
              high-quality art pieces.
            </div>
          </div>
        </div>
        <div className="flex items-center my-28">
          <div className="w-[60%] text-center px-28">
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
              We understand that art can bring joy, inspiration, and
              transcendence to life. Therefore, we consider it our important
              responsibility to create a conducive environment for you to
              discover and own art pieces that resonate with you. Our website is
              designed with a user-friendly interface that is easy to navigate,
              allowing you to effortlessly search and explore artworks based on
              your personal preferences.
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
              Join us on the journey of exploring art
              by visiting the ArtSpectrum website today and discover the diverse
              and wonderful world of art paintings.
            </div>
          </div>
          <div className="w-[40%] h-[650px] bg-[#c4c4c4]" />
        </div>
      </div>
    </div>
  );
}

export default About;

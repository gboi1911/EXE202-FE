import React from "react";
import bg_7 from "../../assets/images/bg_7.png"; 
import bg_10 from "../../assets/images/bg_10.png"; 
import bg_11 from "../../assets/images/bg_11.png";
function About() {
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
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
          <div className="w-[45%] h-[650px] bg-[#c4c4c4]" style={{backgroundImage: `url(${bg_11})`,}}/>
          <div className="w-[60%] px-28">
            <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
              Who are we?
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
            ArtSpectrum, an art and technology enterprise based in Ho Chi Minh City. Founded in 2024, ArtSpectrum aims to revolutionize the art market in Vietnam by providing an online platform where artists and art enthusiasts can exchange products and knowledge. 
            </div>
          </div>
        </div>
        <div className="flex items-center my-28">
          <div className="w-[60%] text-center px-28">
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
            The platform caters to individuals with a strong passion for art, offering a diverse range of art products for buying and selling. ArtSpectrum's vision is to empower Vietnamese artists to monetize their creativity while enabling art lovers to own unique pieces. With a commitment to fostering a positive online environment for creativity to flourish, ArtSpectrum seeks to break the boundaries of traditional art markets and unlock a spectrum of artistic passion and innovation.
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
              Join us on the journey of exploring art
              by visiting the ArtSpectrum website today and discover the diverse
              and wonderful world of art paintings.
            </div>
          </div>
          <div className="w-[40%] h-[650px] bg-[#c4c4c4]" style={{backgroundImage: `url(${bg_10})`,}}/>
        </div>
      </div>
    </div>
  );
}

export default About;

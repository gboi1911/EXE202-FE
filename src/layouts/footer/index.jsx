import React from "react";
import vector_2 from "../../assets/images/Vector_2.png";
import vector_6 from "../../assets/images/Vector_6.png";
import vector_4 from "../../assets/images/Vector_4.png";
import vector_1 from "../../assets/images/Vector_1.png";
import logo from "../../assets/images/logo.png";

const redirectToFacebook = () => {
  window.open('https://www.facebook.com/profile.php?id=61560856130286', '_blank');
};
  
function Footer() {
  return (
    <div className="w-full">
      <div className="w-full h-[525px] bg-[#5171f4] flex justify-around items-center">
        <div className="w-[829px] h-[209px] text-[0px]">
          <span className="flex justify-start items-start font-bold  text-[30px]  leading-[40px] text-[#fbf9f6] mt-0 mr-0 mb-10 ml-0">
            Stay In the Loop <br />
            Subscribe to Our Newsletter!
          </span>
          <div className="flex  items-center gap-10">
            <div
              className="w-[116px] h-[102px] bg-[url(../assets/images/39795e02-4a41-41de-9085-f0c278eef84f.png)] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${vector_2})`,
              }}
            />
            <span className="flex w-[663px] h-[64px] justify-start items-start  text-[18px]  leading-[32px] text-[#fff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </div>
        <div className="flex w-[411.714px] h-[131.378px] flex-col gap-[67.151px] items-start flex-nowrap">
          <div className="flex flex-col gap-[20.916px] items-start self-stretch shrink-0 flex-nowrap">
            <input
              type="text"
              className="text-[#fff] w-full bg-[transparent] rounded-[18px] border border-white text-lg p-4"
              placeholder="Name"
            />
            <button className="bg-[#fb9054] rounded-[12px] border-none w-full p-4">
              <span className="text-[20px] text-[#000]">LOGIN</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgba(81,113,244,0.1)]">
        <div className="w-full pt-36 pb-10 flex justify-evenly items-center">
          <div>
            <div
              className="w-[500px] h-[125px] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            <span className="flex w-[460px] h-[84px] justify-start items-start  text-[18px]  leading-[28px] text-[rgba(0,0,0,0.5)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
          <div className="w-1/2 flex justify-evenly items-baseline">
            <div>
              <span className="flex h-[24px] justify-start items-start  mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                QUICK LINKS
              </span>
              <span className="flex justify-start items-start  text-[18px]  leading-[44px] text-[rgba(0,0,0,0.7)]">
                About us
                <br />
                Contact us
                <br />
                Products
                <br />
                Login
                <br />
                Sign Up
              </span>
            </div>

            <div>
              <span className="flex h-[24px] justify-start items-start  mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                CUSTOMER AREA
              </span>

              <span className="flex justify-start items-start  text-[18px]  leading-[44px] text-[rgba(0,0,0,0.7)]">
                My Account
                <br />
                Orders
                <br />
                Tracking List
                <br />
                Terms
                <br />
                Privacy Policy
                <br />
                My Cart
                <br />
              </span>
            </div>
            <div>
              <span className="flex h-[24px] justify-start items-start  mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                CONTACT
              </span>

              <div className="flex justify-start items-center gap-6">
                <div
                  className="w-[48px] h-[51px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${vector_1})`,
                  }}
                />
                <div>
                  <span className="flex h-[24px] justify-start items-start  text-[14px]  leading-[24px] text-[#000]">
                    Have any question?
                  </span>
                  <span className="flex h-[24px] justify-start items-start  text-[18px]  leading-[24px] text-[#ff7020]">
                  +84 967 278 848
                  </span>
                </div>
              </div>
              <span className="flex h-[24px] justify-start items-start mt-16 mb-6 text-[20px] font-semibold leading-[24px] text-[#000]">
                SOCIAL
              </span>
              <div className="flex w-[130px] h-[58px] gap-[14px] items-center flex-nowrap">
                <div className="p-4 bg-gray-300 rounded-lg">
                  <div
                    className="w-[24px] h-[24px] shrink-0 bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url(${vector_6})`,
                    }}
                    onClick={redirectToFacebook}
                  />                
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className="flex justify-center items-start text-[24px] leading-[34px] text-[#000] text-center py-20"
          style={{
            borderTop: "2px solid #999",
          }}
        >
          Copyright © 2024 ArtSpectrum
        </span>
      </div>
    </div>
  );
}

export default Footer;

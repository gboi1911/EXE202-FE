import React from "react";
import bg_5 from "../../../assets/images/bg_5.png";
import ProductCard from "../../../components/ProductCard";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productdetails");
  };
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_5})`,
          }}
        />
        <div className="w-[530px] absolute top-[200px] left-[300px]">
          <span className="flex justify-start items-start text-[60px] font-bold text-[#fff]">
            Ready to dive in the world of art?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
            Immerse yourself in breathtaking artworks and inspiring stories on
            our art website.
          </span>
          <button className="bg-[#fb9054] rounded-[12px] w-3/2 p-4">
            <span className="text-[20px] text-[#fff]">
              Discover ArtSpectrum
            </span>
          </button>
        </div>
      </div>
      <div className="flex m-20">
        <div className="relative w-[351px] h-[1438px]">
          <div className="w-[351px] h-[1438px]">
            <div className="absolute w-[355px] h-[860px] top-[578px] left-0">
              <div className="absolute top-[838px] left-[128px] [font-family:'Lato',Helvetica] font-bold text-[#ff7020] text-[18px] tracking-[0] leading-[normal]">
                Reset Filter
              </div>
              <button className="all-[unset] box-border absolute w-[353px] h-[66px] top-[741px] left-0">
                <div className="relative w-[351px] h-[66px] bg-[#ff7020] rounded-[14px]">
                  <div className="absolute top-[23px] left-[147px] [font-family:'Lato',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
                    FILTER
                  </div>
                </div>
              </button>
              <div className="absolute w-[354px] h-[235px] top-[452px] left-0">
                <div className="absolute w-[114px] h-[53px] top-[70px] left-0">
                  <div className="relative w-[112px] h-[53px] bg-[#ffe6d8] rounded-[7px]">
                    <div className="absolute top-[16px] left-[32px] [font-family:'Lato',Helvetica] font-semibold text-[#ff7020] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      White
                    </div>
                  </div>
                </div>
                <div className="absolute w-[127px] h-[53px] top-[70px] left-[128px]">
                  <div className="relative w-[125px] h-[53px] rounded-[7px] border border-solid border-[#ffd5be]">
                    <div className="absolute top-[15px] left-[40px] [font-family:'Lato',Helvetica] font-semibold text-[#ff7020] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Black
                    </div>
                  </div>
                </div>
                <div className="absolute w-[108px] h-[53px] top-[138px] left-0">
                  <div className="relative w-[106px] h-[53px] rounded-[7px] border border-solid border-[#ffd5be]">
                    <div className="absolute top-[15px] left-[37px] [font-family:'Lato',Helvetica] font-semibold text-[#ff7020] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Blue
                    </div>
                  </div>
                </div>
                <div className="absolute top-[213px] left-[6px] [font-family:'Lato',Helvetica] font-bold text-[#ff7020] text-[18px] tracking-[0] leading-[normal]">
                  + Show more
                </div>
                <div className="absolute w-[117px] h-[53px] top-[138px] left-[122px]">
                  <div className="relative w-[115px] h-[53px] rounded-[7px] border border-solid border-[#ffd5be]">
                    <div className="absolute top-[15px] left-[39px] [font-family:'Lato',Helvetica] font-semibold text-[#ff7020] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Red
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-[4px] [font-family:'Lato',Helvetica] font-semibold text-[#575757] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Color
                </div>
                <div className="absolute w-[99px] h-[21px] top-px left-[253px]">
                  <div className="absolute top-0 left-[31px] [font-family:'Lato',Helvetica] font-semibold text-[#575757] text-[16px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                    Select All
                  </div>
                  <img
                    className="absolute w-[20px] h-[21px] top-0 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/C7XIc8Of/img/vector.svg"
                  />
                </div>
              </div>
              <div className="absolute w-[350px] h-[158px] top-[255px] left-0">
                <div className="top-0 absolute w-[352px] h-[69px] left-0">
                  <div className="relative w-[350px] h-[69px] rounded-[7px] border-2 border-solid border-[#eaeaea]">
                    <div className="absolute top-[20px] left-[31px] [font-family:'Lato',Helvetica] font-medium text-[#575757] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Choose Brand
                    </div>
                    <img
                      className="absolute w-[15px] h-[10px] top-[31px] left-[289px]"
                      alt="Chevron dropdown"
                      src="https://c.animaapp.com/C7XIc8Of/img/chevron-dropdown-1.svg"
                    />
                  </div>
                </div>
                <div className="top-[89px] absolute w-[352px] h-[69px] left-0">
                  <div className="relative w-[350px] h-[69px] rounded-[7px] border-2 border-solid border-[#eaeaea]">
                    <div className="absolute top-[20px] left-[31px] [font-family:'Lato',Helvetica] font-medium text-[#575757] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Choose Location
                    </div>
                    <img
                      className="absolute w-[15px] h-[10px] top-[31px] left-[289px]"
                      alt="Chevron dropdown"
                      src="https://c.animaapp.com/C7XIc8Of/img/chevron-dropdown-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[357px] h-[117px] top-[88px] left-0">
                <div className="absolute w-[351px] h-[24px] top-[51px] left-0">
                  <div className="relative h-[24px]">
                    <div className="absolute w-[351px] h-[6px] top-[9px] left-0 bg-[#c4c4c4]" />
                    <div className="absolute w-[212px] h-[6px] top-[9px] left-[81px] bg-[#ff7020]" />
                    <div className="absolute w-[24px] h-[24px] top-0 left-[72px] bg-[#ff7020] rounded-[12px]" />
                    <div className="absolute w-[24px] h-[24px] top-0 left-[277px] bg-[#ff7020] rounded-[12px]" />
                  </div>
                </div>
                <div className="left-[62px] absolute top-[98px] [font-family:'Lato',Helvetica] font-thin text-[#575757] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 1,500
                </div>
                <div className="left-[262px] absolute top-[98px] [font-family:'Lato',Helvetica] font-thin text-[#575757] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 90,500
                </div>
                <div className="absolute top-0 left-[4px] [font-family:'Lato',Helvetica] font-semibold text-[#575757] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Price range
                </div>
              </div>
              <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal]">
                Filters
              </div>
            </div>
            <div className="absolute w-[353px] h-[484px] top-0 left-0">
              <div className="relative w-[351px] h-[484px] rounded-[30px] border border-solid border-[#c4c4c4]">
                <div className="absolute w-[220px] h-[332px] top-[109px] left-[50px]">
                  <p className="absolute top-[218px] left-0 [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-black">Smartphone </span>
                    <span className="text-[#8d8d8d]">(21)</span>
                  </p>
                  <p className="absolute top-0 left-0 [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-[#ff7020]">
                      Laptop &amp; Computer{" "}
                    </span>
                    <span className="text-[#8d8d8d]">(45)</span>
                  </p>
                  <p className="absolute top-[38px] left-[31px] [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-black">Hardware&nbsp;&nbsp;</span>
                    <span className="text-[#858585]">(25)</span>
                  </p>
                  <p className="absolute top-[172px] left-[31px] [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-black">Software&nbsp;&nbsp;</span>
                    <span className="text-[#858585]">(30)</span>
                  </p>
                  <div className="absolute top-[72px] left-[47px] [font-family:'SFU_Futura-Book',Helvetica] font-normal text-[#5f5f5f] text-[18px] tracking-[0] leading-[normal]">
                    Laptop
                  </div>
                  <div className="absolute top-[104px] left-[47px] [font-family:'SFU_Futura-Book',Helvetica] font-normal text-[#5f5f5f] text-[18px] tracking-[0] leading-[normal]">
                    Memory
                  </div>
                  <div className="absolute top-[136px] left-[47px] [font-family:'SFU_Futura-Book',Helvetica] font-normal text-[#5f5f5f] text-[18px] tracking-[0] leading-[normal]">
                    Storage
                  </div>
                  <p className="absolute top-[262px] left-0 [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-black">TV </span>
                    <span className="text-[#8d8d8d]">(32)</span>
                  </p>
                  <p className="absolute top-[306px] left-0 [font-family:'SFU_Futura-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                    <span className="text-black">Wireless Hardware </span>
                    <span className="text-[#8d8d8d]">(129)</span>
                  </p>
                </div>
                <div className="absolute top-[43px] left-[35px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
                  Show all categories
                </div>
                <div className="absolute w-[4px] h-[378px] top-[67px] left-[313px] bg-[#e7e7e7] rounded-[25px]">
                  <div className="relative h-[132px] top-[42px] bg-[#ff7020] rounded-[25px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 ml-14">
          <ProductCard isButton={true} handleClick={handleClick} />
          <ProductCard isButton={true} />
          <ProductCard isButton={true} />
          <ProductCard isButton={true} />
          <ProductCard isButton={true} />
        </div>
      </div>
    </div>
  );
}

export default Products;

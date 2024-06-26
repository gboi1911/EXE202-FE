import React from "react";
import bg_8 from "../../../assets/images/bg_8.png";
import Vector_8 from "../../../assets/images/Vector_8.png";
import Vector_9 from "../../../assets/images/Vector_9.png";
import Vector_10 from "../../../assets/images/Vector_10.png";
function ContactUs() {
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_8})`,
          }}
        />
      </div>
      <span className="flex justify-center items-start text-[42px] font-bold text-[#000] text-center my-20">
        Liên hệ với<span className="text-[#206CFF] pl-2">ArtSpectrum</span>
      </span>
      <div className="mx-[130px]">
        <div className="flex justify-center items-center my-28">
          {/* <div className="w-[50%]">
            <div className="text-[24px] font-semibold">
              <div>Name</div>
              <input
                type="text"
                className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
              />
            </div>
            <div className="w-full flex gap-6 my-10">
              <div className="w-full text-[24px] font-semibold">
                <div>Email</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
              <div className="w-full text-[24px] font-semibold">
                <div>Phone Number</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
            </div>
            <div className="text-[24px] font-semibold">
              <div>Message</div>
              <textarea
                type="text"
                className="w-full h-[200px] bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
              />
            </div>
          </div> */}
          <div className="w-[50%] pl-28">
            <div className="text-[24px] font-normal leading-[35px] text-[#000] my-[50px]  text-left">
            Tại ArtSpectrum, bạn sẽ tìm thấy nhiều lựa chọn về tranh gốc, bản in, 
            tác phẩm điêu khắc và các tác phẩm đa phương tiện từ các nghệ sĩ tài năng trên toàn cầu. 
            Cho dù bạn là một nhà sưu tập dày dạn kinh nghiệm hay một người đam mê nghệ thuật khám phá những chân trời mới, 
            chúng tôi đều có thứ gì đó đặc biệt dành cho bạn.
            </div>
            <div>
              <div className="flex items-center text-[24px] font-semibold leading-[35px] text-[#000] my-[30px]  text-left">
                <img src={Vector_8} alt="" className="w-[38px] h-[38px] mr-4" />
                +84 967 278 848
              </div>
              <div className="flex items-center text-[24px] font-semibold leading-[35px] text-[#000] my-[30px]  text-left">
                <img src={Vector_9} alt="" className="w-[38px] h-[38px] mr-4" />
                artspectrumproject@gmail.com
              </div>
              <div className="flex items-center text-[24px] font-semibold leading-[35px] text-[#000] my-[30px]  text-left">
                <img
                  src={Vector_10}
                  alt=""
                  className="w-[38px] h-[42px] mr-4"
                />
                Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

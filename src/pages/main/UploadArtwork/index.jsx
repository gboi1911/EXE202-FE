import React from "react";
import bg_4 from "../../../assets/images/bg_4.png";
function UploadArtwork() {
  return (
    <div>
      <div className="mx-[130px]">
        <div className="flex items-start my-28">
          <div className="w-[50%]">
            <div
              className="w-full h-[500px] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${bg_4})`,
              }}
            />
            <div className="flex items-center gap-3 my-8">
              <div className="text-[20px] text-[#FF7020] font-bold pr-2">
                {"<"}
              </div>
              <div style={{ border: "2px solid #FF7020", padding: " 4px" }}>
                <div className="w-[100px] h-[100px] bg-[#d9d9d9]" />
              </div>
              <div className="w-[100px] h-[100px] bg-[#d9d9d9]" />
              <div className="w-[100px] h-[100px] bg-[#d9d9d9]" />
              <div className="w-[100px] h-[100px] bg-[#d9d9d9]" />
              <div className="text-[20px] text-[#888] font-bold pl-2">
                {">"}
              </div>
            </div>
          </div>
          <div className="w-[50%] pl-28">
            <div className="flex items-center text-[32px] font-bold leading-[35px] text-[#000] mb-[30px]  text-left">
              ARTWORK’S NAME
            </div>
            <div className="text-[24px] font-normal leading-[35px] text-[#000] my-[20px]  text-left">
              SKU:767332108032
            </div>
            <div className="text-[24px] font-normal leading-[35px] text-[#000] my-[20px]  text-left">
              Nullam viverra nibh eget justo finibus posuere. Cras scelerisque,
              sem eget consequat tristique, libero magna luctus est, ac
              convallis arcu elit id nunc. Sed feugiat nibh ut ante congue, et
              fermentum dolor euismod.
            </div>
            <div>
              <div className="flex items-center text-[24px] font-semibold leading-[35px] text-[#000] my-[30px]  text-left">
                750,000VND
              </div>
            </div>
            <div className="flex gap-10 mx-12">
              <button className="bg-[#fff] rounded-[12px] border-blue-500 w-1/2 p-4">
                <span className="text-[20px] text-[#206CFF]">MAKE CHANGE</span>
              </button>
              <button className="bg-[#206CFF] rounded-[12px] border-none w-1/2 p-4">
                <span className="text-[20px] text-[#fff]">UPLOAD</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-[24px] font-semibold">
          <div>Description</div>
          <textarea
            type="text"
            className="w-2/3 h-[300px] bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6 mb-16"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadArtwork;


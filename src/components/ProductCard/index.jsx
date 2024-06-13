import React from "react";

function ProductCard({ isButton, handleClick }) {
  return (
    <div
      className="rounded-3xl shadow-md w-[416px] h-[650px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-[375px] bg-gray-600 rounded-3xl">
        {/* <img src="" alt="product_img" /> */}
      </div>
      <div className="mt-7 ml-7">
        <div className="text-[24px] font-semibold mb-2">Product's Name</div>
        <div className="text-[18px] text-[#8D8D8D] mb-10">...sold</div>
      </div>
      <div className="flex justify-between mx-5">
        <div className="text-[#FF7020] text-[20px] font-semibold">$999</div>
        <div className="flex">
          <div className="text-[#FF7020] text-[20px] font-semibold">5 </div>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
        </div>
      </div>
      <div className="flex justify-center">
        {isButton ? (
          <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
            Add to cart
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ProductCard;

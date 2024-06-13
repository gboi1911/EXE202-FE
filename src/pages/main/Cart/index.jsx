import React from "react";
import ProductCard from "../../../components/ProductCard";
function ProgressStep({ stepNumber, imgSrc }) {
  return (
    <div className="flex gap-5 justify-between px-6 py-5 rounded-xl border border-solid border-zinc-300">
      <div className="shrink-0 my-auto h-1 bg-neutral-300 w-[19px]" />
      <div>{stepNumber}</div>
      <img
        loading="lazy"
        src={imgSrc}
        alt=""
        className="shrink-0 aspect-square fill-neutral-300 w-[18px]"
      />
    </div>
  );
}

function Cart() {
  const steps = [
    {
      stepNumber: 1,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/78fd62415e3e41ad783de0b970b05e9ac879dd8e9be8eafba9d28c8053bcdd29?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&",
    },
    {
      stepNumber: 2,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0475700f2c913a1dcd54b550e7b5129a3cb6976d2eb4ce886e4391210ae16749?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&",
    },
    {
      stepNumber: 3,
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/788493f16df7a0afe3b88910e0df093b4ad3b4786062e6b5d65a1fc6d8dfa5b9?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&",
    },
  ];
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="card">
          <div className="w-[1061px] h-[88px] border-solid border-gray-200 flex justify-between items-center rounded-2xl ]">
            <div>
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                value="All"
              />
              <label for="selectAll" className="ml-2 text-[18px]">
                Select All
              </label>
            </div>
            <div>
              <a href="#" className="no-underline text-[#FF7020]">
                REMOVE
              </a>
            </div>
          </div>
          <div className="w-[1061px] h-[190px] shadow-lg flex items-center ">
            <input
              type="checkbox"
              id="selectAll"
              name="selectAll"
              value="All"
              className="mx-10"
            />
            <div className="w-[152px] h-[133px] bg-blue-gray-300 mr-10"></div>
            <div className="flex flex-col gap-8">
              <div>Product Name</div>
              <div>$999</div>
              <div>SKU 12314124124</div>
            </div>
            <div className="flex ml-[300px]">
              <section className="flex gap-5 justify-between px-6 py-5 text-xl font-bold text-orange-500 whitespace-nowrap rounded-xl border border-solid border-zinc-300 mr-10">
                <div className="shrink-0 my-auto h-1 bg-gray-300 w-[19px]" />
                <p>1</p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78fd62415e3e41ad783de0b970b05e9ac879dd8e9be8eafba9d28c8053bcdd29?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                  className="shrink-0 aspect-square fill-neutral-300 w-[18px]"
                />
              </section>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0475700f2c913a1dcd54b550e7b5129a3cb6976d2eb4ce886e4391210ae16749?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                alt=""
                className="shrink-0 aspect-[1.08] w-[60px] mr-3"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/788493f16df7a0afe3b88910e0df093b4ad3b4786062e6b5d65a1fc6d8dfa5b9?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                alt=""
                className="shrink-0 aspect-[1.08] w-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="side">
          <div className="w-[507px] h-[88px] border-solid border-orange-700 flex justify-center items-center rounded-2xl">
            <div className="text-[20px] text-[#FF7020]">I Have promo code</div>
          </div>
          <div className="w-[507px] h-[314px] mt-10 rounded-2xl border-solid border-gray-300">
            <div className="text-[18px] font-semibold mt-7 ml-10">
              Shopping Summary
            </div>
            <div className="flex justify-between mx-10 mt-10">
              <div className="font-semibold">Total</div>
              <div className="font-bold text-[#FF7020] text-[20px]">$9999</div>
            </div>
            <div className="flex justify-center">
              <button className="w-[450px] h-[57px] bg-[#FF7020] border-none text-white text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                CHECKOUT
              </button>
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="/products"
                className="no-underline font-semibold text-[#FF7020]"
              >
                Back to Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Recently Viewed</div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <ul className="flex flex-row gap-10 list-none">
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;

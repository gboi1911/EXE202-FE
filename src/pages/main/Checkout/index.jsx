import React from "react";
import ProductCard from "../../../components/ProductCard";

function Checkout() {
  return (
    <div>
      <div className="mx-[130px] text-[24px] font-bold">Shipping Details</div>
      <div className="mx-[130px]">
        <div className="flex items-center my-10 justify-evenly">
          <div className="w-[50%]">
            <div className="w-full flex gap-6 my-10">
              <div className="w-full text-[24px] font-semibold">
                <div>First Name</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
              <div className="w-full text-[24px] font-semibold">
                <div>Last Name</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
            </div>
            <div className="w-full flex gap-6 my-10">
              <div className="w-full text-[24px] font-semibold">
                <div>Email Address</div>
                <input
                  type="email"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
              <div className="w-full text-[24px] font-semibold">
                <div>Mobile Phone Number</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
            </div>
            <div className="w-full flex gap-6 my-10">
              <div className="w-full text-[24px] font-semibold">
                <div>Address</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
              <div className="w-full text-[24px] font-semibold">
                <div>Country</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
            </div>
            <div className="w-full flex gap-6 my-10">
              <div className="w-full text-[24px] font-semibold">
                <div>Postcose/ZIP</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
              <div className="w-full text-[24px] font-semibold">
                <div>Town/City</div>
                <input
                  type="text"
                  className="w-full bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                />
              </div>
            </div>
            <div className="text-[24px] font-semibold">
              <div>Note</div>
              <textarea
                type="text"
                className="w-full h-[200px] bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[507px] h-[976px] rounded-2xl border-solid border-2 border-gray-300">
              <div className="mt-10 ml-10 text-[18px] font-semibold">
                My Orders
              </div>
              {/* Map */}
              <div>
                <div className="flex justify-evenly text-[#afa9a9] mt-5 mb-5">
                  <div>Quantity</div>
                  <div>Product Name</div>
                  <div>$(Price)</div>
                </div>
                <div className="flex justify-evenly text-[#afa9a9] mt-5 mb-15">
                  <div>Quantity</div>
                  <div>Product Name</div>
                  <div>$(Price)</div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="mt-10 mx-10 text-[#afa9a9] text-[18px]">
                <div className="flex justify-between mb-5">
                  <div>Subtotal</div>
                  <div>$</div>
                </div>
                <div className="flex justify-between mb-5">
                  <div>Shipping</div>
                  <div>$</div>
                </div>
                <div className="flex justify-between mb-5">
                  <div>Tax</div>
                  <div>$</div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="flex justify-between mt-10 mx-10">
                <div className="text-[18px] font-semibold">Order Total</div>
                <div className="text-[20px] text-[#FB9054] font-semibold">
                  $9999
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="mt-10 ml-10">
                <div className="text-[20px] font-semibold mb-5">Payment</div>
                <div className="flex flex-col gap-5">
                  <div>
                    <input type="radio" id="bank" name="payment" value="Bank" />
                    <label for="bank" className="ml-2">
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="Paypal"
                    />
                    <label for="paypal" className="ml-2">
                      Paypal
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-[450px] h-[57px] bg-[#FF7020] border-none text-white text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                  PLACE ORDER
                </button>
              </div>
              <div className="relative bottom-0 text-[16px] text-[#8D8D8D] mt-[200px] mx-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore e
              </div>
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

export default Checkout;

import React from "react";
import { useSelector } from "react-redux";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { checkOut, order, orderDetail } from "../../../api/cart";

function Checkout() {
  const { isLogin } = useIsLogin();
  const navigate = useNavigate();
  const { listCart } = useSelector((state) => state.cart);
  const location = useLocation();
  const orderObject = location.state?.orderObject;
  console.log("Order Id new", orderObject.data.orderId);
  async function confirmOrderDetail() {
    for (let i = 0; i < listCart.length; i++) {
      const dataDetail = await orderDetail({
        orderId: orderObject.data.orderId,
        paintingId: listCart[i].paintingQuantity[0].paintingId,
        quantity: listCart[i].paintingQuantity[0].quantity,
        priceAtOrderTime: listCart[i]?.price,
      });
    }

    try {
      const response = await checkOut(orderObject.data.orderId);

      if (response.ok) {
        // Log the raw response text
        const responseText = await response.text();
        console.log("Raw response text:", responseText);

        let intermediateParsed;
        let dataPayment;

        // First parsing
        try {
          intermediateParsed = JSON.parse(responseText);
          console.log("Intermediate parsed object:", intermediateParsed);
          console.log(
            "Type of intermediate parsed object:",
            typeof intermediateParsed
          );
        } catch (e) {
          console.error("Failed to parse first JSON:", e);
          return; // Exit if first JSON parsing fails
        }

        // Second parsing if necessary
        if (typeof intermediateParsed === "string") {
          try {
            dataPayment = JSON.parse(intermediateParsed);
          } catch (e) {
            console.error("Failed to parse second JSON:", e);
            return; // Exit if second JSON parsing fails
          }
        } else {
          dataPayment = intermediateParsed;
        }

        console.log("Final parsed response object:", dataPayment);

        // Ensure that the parsed object is correctly structured
        if (dataPayment && typeof dataPayment === "object") {
          console.log("Type of dataPayment:", typeof dataPayment);

          // Access properties directly
          const code = dataPayment.code;
          const data = dataPayment.data;

          // Proceed with existing logic
          if (code === "00") {
            window.location.href = data.checkoutUrl;
          } else {
            console.error("Checkout unsuccessful:", code);
          }
        } else {
          console.error("Final parsed response is not an object:", dataPayment);
        }
      } else {
        console.error("Checkout response was not ok:", response.status);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }

  const handleCheckOut = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      confirmOrderDetail();
    }
  };
  return (
    <div>
      <div className="mx-[130px] text-[24px] font-bold">Shipping Details</div>
      <div className="mx-[130px]">
        <div className="flex my-10 justify-evenly">
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
              {listCart.length > 0
                ? listCart.map((item, index) => (
                    <div>
                      <div
                        key={index}
                        className="flex justify-between mx-10 mt-10"
                      >
                        <div className="font-semibold">{item.title}</div>
                        <div className="font-bold text-[#FF7020] text-[20px]">
                          <div className="flex gap-10">
                            <div className="text-[#afa9a9] text-[18px]">
                              x{item.paintingQuantity[0].quantity}
                            </div>
                            <div className="text-[#afa9a9] text-[18px]">
                              {item.price} VND
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : " "}
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="mt-10 mx-10 text-[#afa9a9] text-[18px]">
                <div className="flex justify-between mb-5">
                  <div>Subtotal</div>
                  <div>
                    {listCart.reduce(
                      (total, item) =>
                        total + item.price * item.paintingQuantity[0].quantity,
                      0
                    )}{" "}
                    VND
                  </div>
                </div>
                <div className="flex justify-between mb-5">
                  <div>Shipping</div>
                  <div>VND</div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="flex justify-between mt-10 mx-10">
                <div className="text-[18px] font-semibold">Order Total</div>
                <div className="text-[20px] text-[#FB9054] font-semibold">
                  {listCart.reduce(
                    (total, item) =>
                      total + item.price * item.paintingQuantity[0].quantity,
                    0
                  )}{" "}
                  VND
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <div className="bg-blue-gray-300 border-b-[0.25px] border-solid border-gray-300 w-[400px] absolute"></div>
              </div>
              <div className="mt-10 ml-10">
                <div className="text-[20px] font-semibold mb-5">Payment</div>
                <div className="flex flex-col gap-5">
                  <div>
                    <input
                      type="radio"
                      defaultChecked
                      id="bank"
                      name="payment"
                      value="Bank"
                    />
                    <label for="bank" className="ml-2">
                      Direct Bank Transfer
                    </label>
                  </div>
                  {/* <div>
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="Paypal"
                    />
                    <label for="paypal" className="ml-2">
                      Paypal
                    </label>
                  </div> */}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleCheckOut()}
                  className="w-[450px] h-[57px] bg-[#FF7020] border-none text-white text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Recently Viewed</div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <ul className="flex flex-row gap-10 list-none"></ul>
        </div>
      </div> */}
    </div>
  );
}

export default Checkout;

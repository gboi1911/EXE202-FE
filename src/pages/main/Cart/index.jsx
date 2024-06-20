import React from "react";
import ProductCard from "../../../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteCart, getCartByUserId, updateQualityCart } from "../../../api/cart";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/cart/cart-slice";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { toast } from "react-toastify";
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
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const navigate = useNavigate();
  const { listCart } = useSelector((state) => state.cart);
  const handleClick = () => {
    navigate("/checkout");
  };
  async function handleDeleteCart(values) {
    const data = await deleteCart(values);
    if (data.succeeded) {
      dispatch(getCart([]));
      toast.success("Delete Cart successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("Delete Cart  wrong!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }
  async function handleUpdateQualityCart(cartId, paintingId, quantity) {
    const values = {
      userId: isLogin.userCredentials.userId,
      paintingId: paintingId,
      quantity: quantity,
    };
    const data = await updateQualityCart(values, cartId);
    if (data.succeeded) {
      const data = await getCartByUserId(isLogin.userCredentials.userId);
      if (data.succeeded) {
        dispatch(getCart(data.data));
      }
    } else {
      toast.error("update Cart wrong!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }
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
            <div></div>
            <div>
              <div
                className="no-underline text-[#FF7020] mx-10"
                onClick={() => handleDeleteCart(listCart[0].cartId)}
              >
                REMOVE ALL
              </div>
            </div>
          </div>
          {listCart.length > 0
            ? listCart.map((item, index) => (
                <div
                  className="w-[1061px] h-[190px] shadow-lg flex items-center "
                  key={index}
                >
                  <div
                    className="w-[152px] h-[133px] bg-blue-gray-300 mx-10"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "round",
                    }}
                  ></div>
                  <div className="flex flex-col gap-8">
                    <div>{item.title}</div>${item.price} - sales Price : $
                    {item.salesPrice}
                    <div>{item.description}</div>
                  </div>
                  <div className="flex ml-[300px]">
                    <section className="flex gap-5 justify-between px-6 py-5 text-xl font-bold text-orange-500 whitespace-nowrap rounded-xl border border-solid border-zinc-300 mr-10">
                      <div
                        className="shrink-0 my-auto h-1 bg-gray-300 w-[19px]"
                        onClick={() =>
                          handleUpdateQualityCart(
                            item.cartId,
                            item.paintingQuantity[0].paintingId,
                            item.paintingQuantity[0].quantity - 1
                          )
                        }
                      />
                      <p>{item.paintingQuantity[0].quantity}</p>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78fd62415e3e41ad783de0b970b05e9ac879dd8e9be8eafba9d28c8053bcdd29?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                        className="shrink-0 aspect-square fill-neutral-300 w-[18px]"
                        onClick={() =>
                          handleUpdateQualityCart(
                            item.cartId,
                            item.paintingQuantity[0].paintingId,
                            item.paintingQuantity[0].quantity + 1
                          )
                        }
                      />
                    </section>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0475700f2c913a1dcd54b550e7b5129a3cb6976d2eb4ce886e4391210ae16749?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                      alt=""
                      className="shrink-0 aspect-[1.08] w-[60px] mr-3"
                      onClick={() =>
                        handleUpdateQualityCart(
                          item.cartId,
                          item.paintingQuantity[0].paintingId,
                          0
                        )
                      }
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/788493f16df7a0afe3b88910e0df093b4ad3b4786062e6b5d65a1fc6d8dfa5b9?apiKey=7cd5fba2528f41be8b8a80243d57d2c2&"
                      alt=""
                      className="shrink-0 aspect-[1.08] w-[60px]"
                    />
                  </div>
                </div>
              ))
            : "not found"}
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
              <button
                className="w-[450px] h-[57px] bg-[#FF7020] border-none text-white text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white"
                onClick={handleClick}
              >
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

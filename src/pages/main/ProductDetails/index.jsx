import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import bg_4 from "../../../assets/images/bg_4.png";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import { getProductById } from "../../../api/product";
import { addCart, getCartByUserId } from "../../../api/cart";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCart } from "../../../store/cart/cart-slice";
import { useIsLogin } from "../../../hooks/useIsLogin";
function ProductDetails() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(false);
  async function fetchGetProductById() {
    const data = await getProductById(paintingId);
    if (data.succeeded) {
      setPainting(data.data);
    }
  }
  async function addToCart(paintingId) {
    const data = await addCart({
      userId: isLogin.userCredentials.userId,
      paintingQuantity: [
        {
          paintingId: paintingId,
          quantity: 1,
        },
      ],
    });
    if (data.succeeded) {
      const data = await getCartByUserId(isLogin.userCredentials.userId);
      if (data.succeeded) {
        dispatch(getCart(data.data));
      }
      toast.success("add to cart successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("Some paintings are already in the cart!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }
  useEffect(() => {
    fetchGetProductById();
  }, [paintingId]);
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="w-[50%] flex justify-center">
          <Carousel className="w-[684px] h-[524px]">
            <div
              className="w-[684px] h-[524px] bg-cover bg-no-repeat relative rounded-2xl"
              style={{
                backgroundImage: `url(${painting?.imageUrl})`,
              }}
            />

            <div
              className="w-[684px] h-[524px] bg-cover bg-no-repeat relative"
              style={{
                backgroundImage: `url(${bg_4})`,
              }}
            />

            <div
              className="w-[684px] h-[524px] bg-cover bg-no-repeat relative"
              style={{
                backgroundImage: `url(${bg_4})`,
              }}
            />
          </Carousel>
        </div>
        <div className="w-[50%] flex flex-col justify-center">
          <div className="text-[24px] font-bold mb-5">
            {painting?.title} - {painting?.artistsId}
          </div>
          <div className="mb-5">{painting?.description}</div>
          <div className="text-[24px]">{painting?.price}VND</div>
          <div className="flex gap-10">
            <Link to="/checkout">
              <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                Buy
              </button>
            </Link>
            <div>
              <button
                className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white"
                onClick={() => addToCart(painting.paintingId)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

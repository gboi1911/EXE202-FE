import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getArtistById,
  getProductById,
  getUserById,
} from "../../../api/product";
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
  const [artist, setArtist] = useState(false);
  const [user, setUser] = useState(false);
  // async function fetchGetProductById() {
  //   const data = await getProductById(paintingId);
  //   if (data.succeeded) {
  //     setPainting(data.data);
  //     console.log(data.data.artistsId);
  //     const dataArtist = await getArtistById(data.data.artistsId);
  //     if (dataArtist.succeeded) {
  //       setArtist(dataArtist.data);
  //       const dataUser = await getUserById(dataArtist.data.userId);
  //       if (dataUser.succeeded) {
  //         setUser(dataUser.data);
  //         console.log(dataUser.data);
  //       }
  //     }
  //   }
  // }
  async function fetchGetProductById(paintingId) {
    try {
      const data = await getProductById(paintingId);
      if (data.succeeded) {
        setPainting(data.data);
        console.log(data.data);
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
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

  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  useEffect(() => {
    fetchGetProductById(paintingId);
  }, []);
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="w-[50%] flex justify-center">
          <div className="w-[684px] h-[524px]">
            <div
              className="w-[684px] h-[524px] bg-cover bg-no-repeat relative rounded-2xl"
              style={{
                backgroundImage: `url(${painting?.imageUrl})`,
              }}
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center">
          <div className="text-[24px] font-bold mb-5">
            Tác phẩm: {painting?.title}
          </div>
          <div className="mb-5 w-[700px] text-justify text-[20px]">
            <div>ID Tác giả: {painting.artistsId}</div>
            <div>Tên tác giả: {painting.fullName}</div>
          </div>
          <div>Miêu tả:</div>
          <div className="mb-5 w-[700px] text-justify">
            {painting?.description}
            {/* {user.fullName} {user.username} */}
          </div>
          <div className="text-[24px]">{formatPrice(painting?.price)}</div>
          <div className="flex gap-10">
            <div>
              <button
                className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white"
                onClick={() => addToCart(painting.paintingId)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

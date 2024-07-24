import React, { useEffect, useState } from "react";
import bg_9 from "../../../assets/images/bg_9.png";
import { Link } from "react-router-dom";
import { getProducts } from "../../../api/product";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(false);
  async function fetchGetProducts() {
    const data = await getProducts();
    if (data.succeeded) {
      setProducts(data.data);
    }
  }
  useEffect(() => {
    fetchGetProducts();
  }, []);

  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  const handleClick = (product) => {
    navigate(`/products/${product.paintingId}`);
  };
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_9})`,
          }}
        />
        <div className="w-[530px] absolute top-[200px] left-[300px]">
          <span className="flex justify-start items-start text-[50px] font-bold text-[#fff]">
            Bạn đã sẵn sàng bước vào thế giới nghệ thuật của chúng tôi chưa ?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
            Đắm chìm trong những tác phẩm nghệ thuật ngoạn mục và những câu
            chuyện đầy cảm hứng trên trang web nghệ thuật của chúng tôi.
          </span>
          <Link to="/products">
            <button className="bg-[#fb9054] rounded-[12px] w-3/2 p-4 cursor-pointer">
              <span className="text-[20px] text-[#fff]">
                Khám phá ArtSpectrum
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Mới nhất</div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <ul className="flex flex-row gap-10 list-none">
            {products && products.length > 0 ? (
              products.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[20em] border-solid rounded-2xl border-gray-100 shadow-xl cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    <div className="h-[300px] rounded-3xl">
                      <img
                        src={item.imageUrl}
                        className="object-cover rounded-2xl w-[300px] h-[300px]"
                        alt="product_img"
                      />
                    </div>
                    <div className="mt-7 ml-5">
                      <div className="text-[24px] font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {formatPrice(item.price)}
                      </div>
                      <div className="flex">
                        <div className="text-[#FF7020] text-[20px] font-semibold">
                          5{" "}
                        </div>
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/fluency/48/star--v1.png"
                          alt="star--v1"
                        />
                      </div>
                    </div>
                    {/* <div className="flex justify-center">
                      <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                        Add to cart
                      </button>
                    </div> */}
                  </div>
                );
              })
            ) : (
              <div className="w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]" />
            )}
          </ul>
        </div>
      </div>
      <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Sản phẩm nổi tiếng</div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <ul className="flex flex-row gap-10 list-none">
            {products && products.length > 0 ? (
              products.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[20em] border-solid rounded-2xl border-gray-100 shadow-xl cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    <div className="h-[375px] rounded-3xl">
                      <img
                        src={item.imageUrl}
                        className="object-cover rounded-2xl w-[300px] h-[300px]"
                        alt="product_img"
                      />
                    </div>
                    <div className="mt-7 ml-5">
                      <div className="text-[24px] font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {formatPrice(item.price)}
                      </div>
                      <div className="flex">
                        <div className="text-[#FF7020] text-[20px] font-semibold">
                          5{" "}
                        </div>
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/fluency/48/star--v1.png"
                          alt="star--v1"
                        />
                      </div>
                    </div>
                    {/* <div className="flex justify-center">
                      <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                        Add to cart
                      </button>
                    </div> */}
                  </div>
                );
              })
            ) : (
              <div className="w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]" />
            )}
          </ul>
        </div>
      </div>
      <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Đã xem gần đây</div>
        <div className="overflow-x-scroll whitespace-nowrap">
          <ul className="flex flex-row gap-10 list-none">
            {products && products.length > 0 ? (
              products.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[20em] border-solid rounded-2xl border-gray-100 shadow-xl cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    <div className="h-[375px] rounded-3xl">
                      <img
                        src={item.imageUrl}
                        className="object-cover rounded-2xl w-[300px] h-[300px]"
                        alt="product_img"
                      />
                    </div>
                    <div className="mt-7 ml-5">
                      <div className="text-[24px] font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.title}
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {formatPrice(item.price)}
                      </div>
                      <div className="flex">
                        <div className="text-[#FF7020] text-[20px] font-semibold">
                          5{" "}
                        </div>
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/fluency/48/star--v1.png"
                          alt="star--v1"
                        />
                      </div>
                    </div>
                    {/* <div className="flex justify-center">
                      <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                        Add to cart
                      </button>
                    </div> */}
                  </div>
                );
              })
            ) : (
              <div className="w-[350px] h-[500px] bg-[#c4c4c4] rounded-[20px]" />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

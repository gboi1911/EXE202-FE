import React, { useEffect, useState } from "react";
import bg_9 from "../../../assets/images/bg_9.png";
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
          <span className="flex justify-start items-start text-[60px] font-bold text-[#fff]">
            Ready to dive in the world of art?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
            Immerse yourself in breathtaking artworks and inspiring stories on
            our art website.
          </span>
          <button className="bg-[#fb9054] rounded-[12px] w-3/2 p-4">
            <span className="text-[20px] text-[#fff]">
              Discover ArtSpectrum
            </span>
          </button>
        </div>
      </div>
      <div className="m-20">
        <div className="text-[28px] font-bold mb-20">Latest Uploaded</div>
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
                    <div className="h-[375px] bg-gray-600 rounded-3xl">
                      <img src={item.imageUrl} alt="product_img" />
                    </div>
                    <div className="mt-7 ml-7">
                      <div className="text-[24px] font-semibold mb-2">
                        {item.title}
                      </div>
                      <div className="text-[18px] text-[#8D8D8D] mb-10">
                        ...sold
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {item.price}
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
        <div className="text-[28px] font-bold mb-20">Hotest Items</div>
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
                    <div className="h-[375px] bg-gray-600 rounded-3xl">
                      <img src={item.imageUrl} alt="product_img" />
                    </div>
                    <div className="mt-7 ml-7">
                      <div className="text-[24px] font-semibold mb-2">
                        {item.title}
                      </div>
                      <div className="text-[18px] text-[#8D8D8D] mb-10">
                        ...sold
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {item.price}
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
        <div className="text-[28px] font-bold mb-20">Recently Viewed</div>
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
                    <div className="h-[375px] bg-gray-600 rounded-3xl">
                      <img src={item.imageUrl} alt="product_img" />
                    </div>
                    <div className="mt-7 ml-7">
                      <div className="text-[24px] font-semibold mb-2">
                        {item.title}
                      </div>
                      <div className="text-[18px] text-[#8D8D8D] mb-10">
                        ...sold
                      </div>
                    </div>
                    <div className="flex justify-between mx-5 mb-10">
                      <div className="text-[#FF7020] text-[20px] font-semibold">
                        {item.price}
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

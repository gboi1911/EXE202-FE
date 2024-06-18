import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import bg_4 from "../../../assets/images/bg_4.png";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import { getProductById } from "../../../api/product";

function ProductDetails() {
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(false);
  async function fetchGetProductById() {
    const data = await getProductById(paintingId);
    if (data.succeeded) {
      setPainting(data.data);
    }
  }
  useEffect(() => {
    fetchGetProductById();
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[50%] flex justify-center">
          <Carousel className="w-[684px] h-[524px]">
            <div
              className="w-[684px] h-[524px] bg-cover bg-no-repeat relative rounded-2xl"
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
          <div className="text-[18px] font-semibold mb-5">SKU:767332108032</div>
          <div className="mb-5">{painting?.description}</div>
          <div className="text-[24px]">{painting?.price}VND</div>
          <div className="flex gap-10">
            <Link to="/checkout">
              <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                Buy
              </button>
            </Link>
            <Link to="/cart">
              <button className="w-[228px] h-[57px] bg-white border-[#FF7020] text-[#FF7020] text-[18px] rounded-xl mt-10 cursor-pointer hover:bg-[#FF7020] hover:text-white">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-20">
        <ul className="flex list-none justify-evenly w-[60%] bg-gray-300 h-[98px] items-center text-[24px]">
          <li>Description</li>
          <li>Specification</li>
          <li>Discussion</li>
          <li>Comments</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default ProductDetails;

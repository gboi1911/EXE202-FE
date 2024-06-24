import React, { useEffect, useState } from "react";
import bg_5 from "../../../assets/images/bg_5.png";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../api/product";
import { useDispatch } from "react-redux";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { open } from "../../../store/modal/modal-slice";
import { getArtist } from "../../../api/blog";
import { getSale } from "../../../api/product";
import CreateProductModal from "../../../components/Modal/createProduct";
function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const [dataArtist, setDataArtist] = useState(false);
  const [dataSale, setDataSale] = useState(false);
  const [selectedRange, setSelectedRange] = useState("");
  const onCreateProduct = () => {
    dispatch(
      open(<CreateProductModal dataArtist={dataArtist} dataSale={dataSale} />)
    );
  };
  async function fetchGetArtist() {
    const data = await getArtist();
    if (data.succeeded) {
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].value = data.data[i].artistId;
        data.data[i].label = `artistId - ${data.data[i].artistId}`;
      }
      setDataArtist(data.data);
    }
  }
  async function fetchGetSale() {
    const data = await getSale();
    if (data.succeeded) {
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].value = data.data[i].saleId;
        data.data[i].label = `saleId - ${data.data[i].saleId}`;
      }
      setDataSale(data.data);
    }
  }
  async function fetchGetProducts() {
    const data = await getProducts();
    if (data.succeeded) {
      setProducts(data.data);
    }
  }

  const handleClick = (product) => {
    navigate(`/products/${product.paintingId}`);
  };
  const [products, setProducts] = useState([]);
  const filterProducts = () => {
    switch (selectedRange) {
      case "below500":
        return products.filter((product) => product.price < 500);
      case "500to2000":
        return products.filter(
          (product) => product.price >= 500 && product.price <= 2000
        );
      case "above2000":
        return products.filter((product) => product.price > 2000);
      default:
        return products; // No filter applied
    }
  };
  const handlePriceRangeChange = (range) => {
    setSelectedRange(range);
  };
  const filteredProducts = filterProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    fetchGetArtist();
    fetchGetSale();
    fetchGetProducts();
  }, [products]);
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_5})`,
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
          {isLogin.userCredentials.role === "Admin" && (
            <button
              className="bg-[#fb9054] rounded-[12px] w-3/2 p-4"
              onClick={onCreateProduct}
            >
              <span className="text-[20px] text-[#000]">Create product</span>
            </button>
          )}
        </div>
      </div>
      <div className="flex m-20">
        <div className="w-[351px] h-[838px] border-solid rounded-3xl border-[#fb9054]">
          <div className="w-[351px] h-[838px] mt-5 ml-10">
            <div className="w-[355px] h-[660px]">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal]">
                Filters
              </div>
              <div className="[font-family:'Poppins',Helvetica] text-black text-[20px] mt-5">
                Price
              </div>
              <div className="flex flex-col justify-center gap-4 my-4 absolute mt-5">
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange()}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    All
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("below500")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    Below $500
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("500to2000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    $500 to $2000
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("above2000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    Greater than $2000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap gap-5 ml-14 h-[50%] w-full">
            {filteredProducts && filteredProducts.length > 0 ? (
              currentItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[20em] border-solid rounded-2xl border-gray-100 shadow-xl cursor-pointer"
                    onClick={() => handleClick(item)}
                  >
                    <div className="h-[250px] rounded-3xl">
                      <img
                        src={item.imageUrl}
                        className="object-cover w-full h-full rounded-t-2xl"
                        alt="product_img"
                      />
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
              <p className="[font-family:'Poppins',Helvetica] text-black] text-[30px]">
                No products found.
              </p>
            )}
          </div>
          <div className="pagination ml-14 mt-5">
            {pageNumbers.map((number) => (
              <button
                className="w-[30px] h-[30px] bg-[#FF7020] text-white border-none shadow-lg cursor-pointer hover:bg-[#9c6a4c]"
                key={number}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

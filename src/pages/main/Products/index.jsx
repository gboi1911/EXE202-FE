import React, { useEffect, useState } from "react";
import bg_5 from "../../../assets/images/bg_5.png";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../api/product";
import { useDispatch } from "react-redux";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { open } from "../../../store/modal/modal-slice";
import { getArtist } from "../../../api/product/";
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

  function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  const handleClick = (product) => {
    navigate(`/products/${product.paintingId}`);
    window.scrollTo(0, 0);
  };
  const [products, setProducts] = useState([]);
  const filterProducts = () => {
    switch (selectedRange) {
      case "below1000000":
        return products.filter((product) => product.price < 1000000);
      case "1000000to2000000":
        return products.filter(
          (product) => product.price >= 1000000 && product.price <= 2000000
        );
      case "2000000to5000000":
        return products.filter(
          (product) => product.price >= 2000000 && product.price <= 5000000
        );
      case "5000000to10000000":
        return products.filter(
          (product) => product.price >= 5000000 && product.price <= 10000000
        );
      case "above10000000":
        return products.filter((product) => product.price > 10000000);
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
  }, []);
  console.log(isLogin.userCredentials.fullName);
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
          <span className="flex justify-start items-start text-[50px] font-bold text-[#fff]">
            Bạn đã sẵn sàng bước vào thế giới nghệ thuật của chúng tôi chưa ?
          </span>
          <span className="flex justify-start items-start text-[20px] font-normal text-[#fff] py-10">
            Đắm chìm trong những tác phẩm nghệ thuật ngoạn mục và những câu
            chuyện đầy cảm hứng trên trang web nghệ thuật của chúng tôi.
          </span>
          {isLogin &&
            ["admin", "artist"].includes(
              isLogin.userCredentials.role.toLowerCase()
            ) && (
              <button
                className="bg-[#fb9054] rounded-[12px] w-3/2 p-4 cursor-pointer"
                onClick={onCreateProduct}
              >
                <span className="text-[20px] text-[#000]">
                  Hãy thêm những bức tranh mới
                </span>
              </button>
            )}
        </div>
      </div>
      <div className="flex m-20">
        <div className="w-[351px] h-[838px] border-solid rounded-3xl border-[#fb9054]">
          <div className="w-[351px] h-[838px] mt-5 ml-10">
            <div className="w-[355px] h-[660px]">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[30px] tracking-[0] leading-[normal]">
                Bộ lọc
              </div>
              <div className="[font-family:'Poppins',Helvetica] text-black text-[20px] mt-5">
                Giá
              </div>
              <div className="flex flex-col justify-center gap-4 my-4 absolute mt-5">
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange()}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    Tất cả
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("below1000000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    Dưới 1.000.000 đ
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("1000000to2000000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    1.000.000 - 2.000.000 đ
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("2000000to5000000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    2.000.000 - 5.000.000 đ
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("5000000to10000000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    5.000.000 - 10.000.000 đ
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handlePriceRangeChange("above10000000")}
                    className="bg-white [font-family:'Poppins',Helvetica] text-black text-[15px] h-[20px] w-[20px] rounded-full focus:bg-blue-400 cursor-pointer"
                  ></button>
                  <p className="[font-family:'Poppins',Helvetica] text-black]">
                    Trên 10.000.000 đ
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
              <p className="[font-family:'Poppins',Helvetica] text-black] text-[30px]">
                No products found.
              </p>
            )}
          </div>
          <div className="pagination ml-14 mt-5">
            {pageNumbers.map((number) => (
              <button
                className="w-[30px] h-[30px] ml-3 bg-[#FF7020] text-white border-none shadow-lg cursor-pointer hover:bg-[#9c6a4c]"
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

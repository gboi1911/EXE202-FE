import { useDispatch } from "react-redux";
import Select from "react-select";
import useForm from "./../../hooks/useForm";
import { validateProduct } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { toast } from "react-toastify";
import { close } from "../../store/modal/modal-slice";
import { useEffect, useState } from "react";
import { storeImageToFireBase } from "./../../utils/storeImageToFirebase";
import { postProduct } from "../../api/product";
function CreateProductModal({ dataArtist, dataSale }) {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateProduct
  );
  const [selectedSale, setSelectedSale] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function login() {
    if (!image) {
      return toast.error("chose image!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
    if (!selectedSale?.value) {
      return toast.error("chose artist!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
    const data = await postProduct({
      title: values.title,
      description: values.description,
      imageUrl: image,
      artistsId: dataArtist.artistId,
      saleId: selectedSale?.value,
      price: values.price,
      salesPrice: values.salesPrice,
      stockQuantity: values.stockQuantity,
    });
    if (data.succeeded) {
      dispatch(close());
      toast.success("create successfully!", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    } else {
      toast.error("create failed!", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
  }
  const colorStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "rgb(41, 41, 41)" : "rgb(41, 41, 41)",
      };
    },
  };
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setImage(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Tạo tranh mới</h3>
      <form className="w-full gap-5 grid" onSubmit={handleSubmit} noValidate>
        <div>
          <div className="relative text-center">
            <img
              src={
                image ||
                "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg"
              }
              alt=""
              style={{
                marginRight: "20px",
                maxWidth: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "136px",
                textAlign: "center",
              }}
            >
              {isLoading ? (
                "load"
              ) : (
                <>
                  <input
                    type="file"
                    name="profileImageUrl"
                    accept="image/*"
                    onChange={onSelectFile}
                    id="upload"
                    style={{
                      maxWidth: "150px",
                      height: "150px",
                      cursor: "pointer",
                      position: "absolute",
                      opacity: " 0",
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="relative text-center">
            <input
              type="text"
              name="title"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Product's title"
              onChange={handleChange}
              value={values.title || ""}
              required
            />
            <Validate errors={errors.title} />
          </div>
          <div className="relative text-center flex justify-center">
            <Select
              styles={colorStyles}
              options={dataSale}
              value={selectedSale}
              onChange={(selectedOption) => setSelectedSale(selectedOption)}
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              classNamePrefix="react-select"
            />
          </div>
          <div className="relative text-center">
            <textarea
              type="text"
              name="description"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Content"
              onChange={handleChange}
              value={values.description || ""}
              required
            />
            <Validate errors={errors.description} />
          </div>
          <div className="relative text-center">
            <input
              type="number"
              name="price"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Price"
              onChange={handleChange}
              value={values.price || ""}
              required
            />
            <Validate errors={errors.price} />
          </div>
          <div className="relative text-center">
            <input
              type="number"
              name="salesPrice"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Sales Price"
              onChange={handleChange}
              value={values.salesPrice || ""}
              required
            />
            <Validate errors={errors.salesPrice} />
          </div>
          <div className="relative text-center">
            <input
              type="number"
              name="stockQuantity"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Stock Quantity"
              onChange={handleChange}
              value={values.stockQuantity || ""}
              required
            />
            <Validate errors={errors.stockQuantity} />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-2">
            <span className="text-[20px] text-[#fff]">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProductModal;

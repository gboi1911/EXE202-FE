import { useDispatch } from "react-redux";
import Select from "react-select";
import useForm from "./../../hooks/useForm";
import { validateBlog } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useIsLogin } from "../../hooks/useIsLogin";
import { toast } from "react-toastify";
import { close } from "../../store/modal/modal-slice";
import { useEffect, useState } from "react";
import { storeImageToFireBase } from './../../utils/storeImageToFirebase';
import { postBlog } from "../../api/blog";
function CreateBlogModal({ dataArtist }) {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateBlog
  );
  const [selectedArtist, setSelectedArtist] = useState(false);
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
    if (!selectedArtist?.value) {
      return toast.error("chose artist!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
    const data = await postBlog({
      titeBlog: values.titeBlog,
      descriptionBlog: values.descriptionBlog,
      imgBlog: image,
      artistId: isLogin.userCredentials.userId,
    });
    if (data.succeeded) {
      dispatch(close());
      toast.success("create successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast.error("create failed!", {
        position: "top-right",
        autoClose: 2000,
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
      <h3 className="heading">Tạo bài viết</h3>
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
              name="titeBlog"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Tựa đề bài viết"
              onChange={handleChange}
              value={values.titeBlog || ""}
              required
            />
            <Validate errors={errors.titeBlog} />
          </div>
          <div className="relative text-center">
            <textarea
              type="text"
              name="descriptionBlog"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Nội dung"
              onChange={handleChange}
              value={values.descriptionBlog || ""}
              required
            />
            <Validate errors={errors.descriptionBlog} />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-2">
            <span className="text-[20px] text-[#fff]">Đã xong</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogModal;

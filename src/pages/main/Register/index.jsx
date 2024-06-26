import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg_6 from "../../../assets/images/bg_6.png";
import { validateRegister } from "../../../components/validateInput/validateInput";
import useForm from "../../../hooks/useForm";
import Validate from "../../../components/validateInput";
import { register } from "../../../api/auth";
import { toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      navigate("/");
   }
  // eslint-disable-next-line
  }, [search]);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateRegister
  );
  async function login() {
    delete values["confirmPassword"];
    values["role"] = search.split("?role=")[1];
    const data = await register(values);
    if (data.succeeded) {
      toast.success("register successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      navigate("/login");
    } else {
      toast.error("register failed!", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  }
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
        style={{
          backgroundImage: `url(${bg_6})`,
        }}
      />
      <div className="w-1/3 h-full bg-[#fff] absolute top-0 right-0 text-center">
        <div className="w-full h-full flex items-center">
          <form
            className="w-full gap-5 grid"
            onSubmit={handleSubmit}
            noValidate
          >
            <span className="text-[32px] text-[#206bff] font-semibold">
              ĐĂNG KÝ TÀI KHOẢN
            </span>
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Tên người dùng"
                  onChange={handleChange}
                  value={values.username || ""}
                  required
                />
                <Validate errors={errors.username} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Họ và tên"
                  onChange={handleChange}
                  value={values.fullName || ""}
                  required
                />
                <Validate errors={errors.fullName} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                <Validate errors={errors.email} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="phoneNumber"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Số điện thoại"
                  onChange={handleChange}
                  value={values.phoneNumber || ""}
                  required
                />
                <Validate errors={errors.phoneNumber} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Địa chỉ"
                  onChange={handleChange}
                  value={values.address || ""}
                  required
                />
                <Validate errors={errors.address} />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                  value={values.password || ""}
                  required
                />
                <Validate errors={errors.password} />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Xác nhận mật khẩu"
                  onChange={handleChange}
                  value={values.confirmPassword || ""}
                  required
                />
                <Validate errors={errors.confirmPassword} />
              </div>
            </div>
            <div>
              <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-2">
                <span className="text-[20px] text-[#fff]">TẠO TÀI KHOẢN</span>
              </button>
            </div>

            <div className="">
              <span className="text-[20px] text-[#000]">
                Bạn đã có tài khoản?
              </span>
              <Link to={"/login"} className="text-[20px] no-underline pl-4">
                ĐĂNG NHẬP
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/3 h-full absolute top-0 left-[80px]">
        <div className="w-full h-full flex items-center">
          <div className="w-full gap-5 grid">
            <span className="text-[60px] text-[#FFF] font-bold">
              Chào mừng bạn đến với Artspectrum
            </span>
            <span className="text-[18px] text-[#fff]">
              Art Spectrum là website kết nối những người yêu nghệ thuật. Đây là nơi mọi người có thể thảo luận về quan điểm nghệ thuật cũng như nơi mua bán tranh.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

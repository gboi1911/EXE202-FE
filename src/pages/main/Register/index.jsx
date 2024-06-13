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
              REGISTER
            </span>
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  className="w-2/3 bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
                  placeholder="Username"
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
                  placeholder="Full name"
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
                  placeholder="Phone number"
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
                  placeholder="Address"
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
                  placeholder="Password"
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
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={values.confirmPassword || ""}
                  required
                />
                <Validate errors={errors.confirmPassword} />
              </div>
            </div>
            <div>
              <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-2">
                <span className="text-[20px] text-[#fff]">REGISTER</span>
              </button>
            </div>

            <div className="">
              <span className="text-[20px] text-[#000]">
                Already have an account?
              </span>
              <Link to={"/login"} className="text-[20px] no-underline pl-4">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/3 h-full absolute top-0 left-[80px]">
        <div className="w-full h-full flex items-center">
          <div className="w-full gap-5 grid">
            <span className="text-[60px] text-[#FFF] font-bold">
              Welcome to artspectrum
            </span>
            <span className="text-[18px] text-[#fff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse suscipit, leo sed vulputate porttitor, tortor eros
              convallis arcu, in ornare sapien orci quis lacus. Morbi eu urna
              odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer eget orci sem. Curabitur aliquet feugiat pulvinar. Fusce
              sed auctor turpis, ac vestibulum libero. Aenean egestas molestie
              lorem, a cursus dui imperdiet eu.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

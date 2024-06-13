import React from "react";
import  bg_6 from "../../../assets/images/bg_6.png";
import { Link, useNavigate } from "react-router-dom";
import useForm from './../../../hooks/useForm';
import { validateLogin } from './../../../components/validateInput/validateInput';
import Validate from './../../../components/validateInput/index';
import { signIn } from "../../../api/auth";
import { setStorage } from "../../../utils/helper";
import { useDispatch } from "react-redux";
import { userProfile } from "../../../store/profile/profile-slice";
import { toast } from "react-toastify";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, errors, handleChange, handleSubmit } = useForm(
      login,
      validateLogin
    );
    async function login() {
      const data = await signIn(values)
      if (data.succeeded) {
        dispatch(userProfile(data.data));
        setStorage({
          key: "userLog",
          value: JSON.stringify(data.data),
        });
        navigate("/about");
        toast.success("Login successfully!", {
          position: "top-right",
          autoClose: 2000,
          theme: "light",
        });
      } else {
          toast.error("email or password wrong!", {
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
              LOGIN
            </span>
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="w-2/3 bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                <Validate errors={errors.email} />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-2/3 bg-[#d9d9d9] rounded-[18px] border-none text-lg p-4 mt-6"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password || ""}
                  required
                />
                <Validate errors={errors.password} />
              </div>
            </div>
            <div className="flex justify-center gap-28">
              <span className="text-[20px] text-[#000]">Remember</span>
              <span className="text-[20px] text-[#000]">Forgot Password?</span>
              <div className="w-[4.97%] h-[93.1%] bg-[url(../assets/images/046c44db-ee91-4e2e-92e3-fd791c4847ab.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[6.9%] left-0 z-[17]" />
            </div>
            <div>
              <button className="bg-[#fb9054] rounded-[12px] border-none w-1/2 p-4">
                <span className="text-[20px] text-[#fff]">LOGIN</span>
              </button>
            </div>

            <div className="">
              <span className="text-[20px] text-[#000]">
                Don’t have an account?
              </span>
              <Link to={"/role"} className="text-[20px] no-underline pl-4">
                Signup
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

export default Login;

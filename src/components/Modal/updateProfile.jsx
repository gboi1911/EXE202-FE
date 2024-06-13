import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { validateUpdateProfile } from "../validateInput/validateInput";
import Validate from "./../validateInput/index";
import { useIsLogin } from "../../hooks/useIsLogin";
import { userProfile } from "../../store/profile/profile-slice";
import { setStorage } from "../../utils/helper";
import { toast } from "react-toastify";
import { updateProfile } from "../../api/auth";
import { close } from "../../store/modal/modal-slice";
function UpdateProfileModal() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateUpdateProfile
  );
  async function login() {
    const data = await updateProfile({
      userId: isLogin.userCredentials?.userId,
      username: values.username || isLogin.userCredentials?.username,
      password: values.password,
      email: values.email || isLogin.userCredentials?.email,
      fullName: values.fullName || isLogin.userCredentials?.fullName,
      address: values.address || isLogin.userCredentials?.address,
      phoneNumber: values.phoneNumber || isLogin.userCredentials?.phoneNumber,
    });
    if (data.succeeded) {
       dispatch(close());
      dispatch(
        userProfile({
          ...isLogin,
          userCredentials: {
            userId: isLogin.userCredentials?.userId,
            username: values.username || isLogin.userCredentials?.username,
            password: values.password,
            email: values.email || isLogin.userCredentials?.email,
            fullName: values.fullName || isLogin.userCredentials?.fullName,
            address: values.address || isLogin.userCredentials?.address,
            phoneNumber:
              values.phoneNumber || isLogin.userCredentials?.phoneNumber,
          },
        })
      );
      setStorage({
        key: "userLog",
        value: JSON.stringify({
          ...isLogin,
          userCredentials: {
            userId: isLogin.userCredentials?.userId,
            username: values.username || isLogin.userCredentials?.username,
            password: values.password,
            email: values.email || isLogin.userCredentials?.email,
            fullName: values.fullName || isLogin.userCredentials?.fullName,
            address: values.address || isLogin.userCredentials?.address,
            phoneNumber:
              values.phoneNumber || isLogin.userCredentials?.phoneNumber,
          },
        }),
      });
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
    <div className="customModal--sign-in options-modal">
      <h3 className="heading">Update Profile</h3>
      <form className="w-full gap-5 grid" onSubmit={handleSubmit} noValidate>
        <div>
          <div className="relative text-center">
            <input
              type="text"
              name="email"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Email"
              onChange={handleChange}
              value={
                values.email ||
                (values.email === "" ? "" : isLogin.userCredentials?.email)
              }
              required
            />
            <Validate errors={errors.email} />
          </div>
          <div className="relative text-center">
            <input
              type="text"
              name="username"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Username"
              onChange={handleChange}
              value={
                values.username ||
                (values.username === ""
                  ? ""
                  : isLogin.userCredentials?.username)
              }
              required
            />
            <Validate errors={errors.username} />
          </div>
          <div className="relative text-center">
            <input
              type="text"
              name="fullName"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="FullName"
              onChange={handleChange}
              value={
                values.fullName ||
                (values.fullName === ""
                  ? ""
                  : isLogin.userCredentials?.fullName)
              }
              required
            />
            <Validate errors={errors.fullName} />
          </div>
          <div className="relative text-center">
            <input
              type="text"
              name="address"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Address"
              onChange={handleChange}
              value={
                values.address ||
                (values.address === "" ? "" : isLogin.userCredentials?.address)
              }
              required
            />
            <Validate errors={errors.address} />
          </div>
          <div className="relative text-center">
            <input
              type="text"
              name="phoneNumber"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Phone Number"
              onChange={handleChange}
              value={
                values.phoneNumber ||
                (values.phoneNumber === ""
                  ? ""
                  : isLogin.userCredentials?.phoneNumber)
              }
              required
            />
            <Validate errors={errors.phoneNumber} />
          </div>
          <div className="relative text-center">
            <input
              type="password"
              name="password"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Create Password"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <Validate errors={errors.password} />
          </div>
          <div className="relative text-center">
            <input
              type="password"
              name="confirmPassword"
              className="w-[83%] bg-[#d9d9d9] rounded-[13px] border-none text-lg p-2 mt-6"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.confirmPassword || ""}
              required
            />
            <Validate errors={errors.confirmPassword} />
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

export default UpdateProfileModal;

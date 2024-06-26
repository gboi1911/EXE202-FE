import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import vector_3 from "../../assets/images/Vector_3.png";
import vector_7 from "../../assets/images/Vector_7.png";
import { useIsLogin } from './../../hooks/useIsLogin';
import Menu from "./menu";
import { useDispatch } from "react-redux";
import { actLogout } from "../../store/profile/profile-slice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  function handleLogout(e) {
    e.preventDefault();
    navigate("/login");
    dispatch(actLogout());
  }
  return (
    <header className="root-container mt-0 py-10 px-10 flex justify-between top-0 fixed relative items-center z-[100]">
      <Link
        to="/home"
        className="flex items-center p-3 py-0 xl:pr-10 lg:pr-8  2xl:pr-22 pr-5 translate-y-[2px] logo-wrapper"
      >
        <img className="logo max-w-[300px]" src={logo} alt="logo" />
      </Link>
      <nav className="items-center justify-between hidden w-full font-semibold lg:flex">
        <div className="flex items-center gap-10 flex">
          <Link
            to={"/about"}
            className="text-black text-[20px] no-underline pl-4"
          >
            Giới thiệu
          </Link>
          <Link
            to={"/products"}
            className="text-black text-[20px] no-underline pl-4"
          >
            Sản phẩm
          </Link>
          <Link
            to={"/contactUs"}
            className="text-black text-[20px] no-underline pl-4"
          >
            Liên hệ
          </Link>
          <Link
            to={"/blog"}
            className="text-black text-[20px] no-underline pl-4"
          >
            Nhật ký
          </Link>
        </div>
        <div className="items-center gap-6 flex">
          {/* <div className="relative overflow-visible group pr-10">
            <div className="items-center gap-10 flex">
              <div
                className="w-[24px] h-[24px] bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${vector_3})`,
                }}
              />
              <div className="relative">
                <div
                  className="w-[28px] h-[24px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${vector_7})`,
                  }}
                />
                <div
                  className="text-white flex items-center justify-center"
                  style={{
                    backgroundColor: "#206CFF",
                    width: "24px",
                    height: "24px",
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    borderRadius: "50%",
                  }}
                >
                  4
                </div>
              </div>
            </div>
          </div> */}
          {isLogin ? (
            <Menu
              handleLogout={handleLogout}
              isLogin={isLogin}
            />
          ) : (
            <>
              <button
                className="bg-[#fff] rounded-[12px] border border-blue-500 w-2/3 p-4 px-10"
                onClick={() => navigate("/login")}
              >
                <span className="text-[20px] text-[#206CFF]">Login</span>
              </button>
              <button className="bg-[#fff] rounded-[12px] border border-black-500 w-2/3 p-4 px-10">
                <span
                  className="text-[20px] text-[#000]"
                  onClick={() => navigate("/role")}
                >
                  Register
                </span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

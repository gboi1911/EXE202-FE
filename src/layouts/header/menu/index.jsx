import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import UpdateProfileModal from "../../../components/Modal/updateProfile";
import { open } from "../../../store/modal/modal-slice";
import { getCartByUserId } from "../../../api/cart";
import { getCart } from "../../../store/cart/cart-slice";
import vector_3 from "../../../assets/images/Vector_3.png";
import vector_7 from "../../../assets/images/Vector_7.png";
import { useNavigate } from "react-router-dom/dist";
function Menu({ handleLogout, isLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isActive, setIsActive, nodeRef, triggerRef } =
    useDetectOutsideClick(false);
  const onHelpModal = () => {
    dispatch(open(<UpdateProfileModal />));
  };
  const { listCart } = useSelector((state) => state.cart);
  async function fetchGetCart() {
    const data = await getCartByUserId(isLogin.userCredentials.userId);
    if (data.succeeded) {
      dispatch(getCart(data.data));
    }
  }
  useEffect(() => {
    fetchGetCart();
  }, []);
  const handleClick = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="relative overflow-visible group pr-10">
        <div className="items-center gap-10 flex">
          <div
            className="w-[24px] h-[24px] bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${vector_3})`,
            }}
          />
          <div className="relative">
            <div
              className="w-[28px] h-[24px] bg-cover bg-no-repeat cursor-pointer"
              style={{
                backgroundImage: `url(${vector_7})`,
              }}
              onClick={handleClick}
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
              {listCart?.length}
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-container header-dropdown-menu">
        <button
          className="flex items-center hover:bg-dark-600 transition-colors h-[42px] py-0 px-3 rounded-lg border-transparent font-semibold button--profile--active bg-dark-600 cursor-pointer"
          ref={triggerRef}
          onClick={() => setIsActive(!isActive)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            />
          </svg>
          <span className="flex items-center gap-2 profile-name">
            {isLogin.userCredentials.username}
          </span>
          {/* <img
          src={user.imageUrl}
          alt="User profile"
          className="profile-picture"
        /> */}
        </button>
        <nav
          ref={nodeRef}
          className={`dropdown-menu shadow-xl bg-light-600 ${
            isActive ? "open" : "closed"
          }`}
        >
          <ul>
          {["admin"].includes(isLogin.userCredentials.role.toLowerCase()) && (
              <li className="list-item">
              <Link
                className="item"
                to={`/dashboard`}
                onClick={() => setIsActive(!isActive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                  />
                </svg>
                <span>Quản lý</span>
              </Link>
            </li>
            )}            
            <li className="list-item">
              <div className="item item--help" onClick={onHelpModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"
                  />
                </svg>
                <span>Cập nhật thông tin</span>
              </div>
            </li>
            <li className="list-item list-item--separator" />
            <li className="list-item">
              <button className="item" type="submit" onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                  />
                </svg>
                <span>Đăng xuất</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;

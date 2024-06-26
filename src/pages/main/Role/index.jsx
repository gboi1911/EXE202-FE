import React from "react";
import bg_1 from "../../../assets/images/bg_1.png";
import { Link, useNavigate } from "react-router-dom";
function Role() {
  const navigation = useNavigate();
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
        style={{
          backgroundImage: `url(${bg_1})`,
        }}
      />
      <div className="w-full h-full absolute text-center flex justify-center items-center">
        <div
          className="bg-[#fff] flex items-center"
          style={{ width: "30%", height: "80%" }}
        >
          <div className="w-full gap-10 grid">
            <span className="text-[50px] text-[#000] font-bold">
              Mục đích bạn tham gia với chúng tôi?
            </span>
            <div>
              <button
                className="bg-[#206CFF] rounded-[12px] border-none w-2/3 p-4"
                onClick={() => navigation("/register?role=buyer")}
              >
                <span className="text-[20px] text-[#fff]">MUA TÁC PHẨM</span>
              </button>
            </div>
            <span className="text-[40px] text-[#000]">Hoặc</span>
            <div>
              <button
                className="bg-[#206CFF] rounded-[12px] border-none w-2/3 p-4"
                onClick={() => navigation("/register?role=Artist")}
              >
                <span className="text-[20px] text-[#fff]">BÁN TÁC PHẨM</span>
              </button>
            </div>
            <div className="flex justify-around items-center">
              <Link to={"/"} className="text-[20px] no-underline">
                Trở về
              </Link>
              <Link
                to={"/register?role=buyer"}
                className="text-[20px] no-underline"
              >
                Bước tiếp theo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Role;

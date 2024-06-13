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
              what role do you want us to see as?
            </span>
            <div>
              <button
                className="bg-[#206CFF] rounded-[12px] border-none w-2/3 p-4"
                onClick={() => navigation("/register?role=buyer")}
              >
                <span className="text-[20px] text-[#fff]">BUY ART</span>
              </button>
            </div>
            <span className="text-[40px] text-[#000]">Or</span>
            <div>
              <button
                className="bg-[#206CFF] rounded-[12px] border-none w-2/3 p-4"
                onClick={() => navigation("/register?role=Artist")}
              >
                <span className="text-[20px] text-[#fff]">SELL ART</span>
              </button>
            </div>
            <div className="flex justify-around items-center">
              <Link to={"/"} className="text-[20px] no-underline">
                Back
              </Link>
              <Link
                to={"/register?role=buyer"}
                className="text-[20px] no-underline"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Role;

import React from "react";
import bg_7 from "../../assets/images/bg_7.png"; 
import bg_10 from "../../assets/images/bg_10.png"; 
import bg_11 from "../../assets/images/bg_11.png";
function About() {
  return (
    <div>
      <div className="relative">
        <div
          className="w-[90%] h-[750px] bg-cover bg-no-repeat relative mt-10 rounded-3xl m-auto"
          style={{
            backgroundImage: `url(${bg_7})`,
          }}
        />
        <div className="w-[530px] absolute top-[300px] right-[100px]">
          <span className="flex justify-start items-start text-[60px] font-bold text-[#fff]">
            Giới thiệu 
          </span>
        </div>
      </div>
      <div className="mx-[130px]">
        <div className="flex items-center my-28">
          <div className="w-[45%] h-[650px] bg-[#c4c4c4]" style={{backgroundImage: `url(${bg_11})`,}}/>
          <div className="w-[60%] px-28">
            <div className="text-[36px] font-bold leading-[50.73px] text-[#000] ">
              Chúng tôi là ai ?
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
            ArtSpectrum, một doanh nghiệp nghệ thuật và công nghệ có trụ sở tại Thành phố Hồ Chí Minh. 
            Được thành lập vào năm 2024, ArtSpectrum đặt mục tiêu cách mạng hóa thị trường nghệ thuật tại Việt Nam 
            bằng cách cung cấp một nền tảng trực tuyến nơi các nghệ sĩ và những người đam mê nghệ thuật có thể trao đổi sản phẩm và kiến ​​thức. 
            </div>
          </div>
        </div>
        <div className="flex items-center my-28">
          <div className="w-[60%] text-center px-28">
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
            Nền tảng này phục vụ những cá nhân có niềm đam mê nghệ thuật mãnh liệt, cung cấp nhiều loại sản phẩm nghệ thuật để mua và bán. 
            Tầm nhìn của ArtSpectrum là trao quyền cho các nghệ sĩ Việt Nam kiếm tiền từ sự sáng tạo của họ đồng thời tạo điều kiện cho những người 
            yêu nghệ thuật sở hữu những tác phẩm độc đáo. Với cam kết thúc đẩy môi trường trực tuyến tích cực để khả năng sáng tạo phát triển, 
            ArtSpectrum tìm cách phá vỡ ranh giới của thị trường nghệ thuật truyền thống và mở ra nhiều niềm đam mê nghệ thuật và sự đổi mới.
            </div>
            <div className="text-[18px] font-normal leading-[25.848px] text-[#000] my-[50px]  text-left">
            Hãy cùng chúng tôi trên hành trình khám phá nghệ thuật bằng cách truy cập trang web ArtSpectrum 
            ngay hôm nay và khám phá thế giới tranh nghệ thuật đa dạng và tuyệt vời.
            </div>
          </div>
          <div className="w-[40%] h-[650px] bg-[#c4c4c4]" style={{backgroundImage: `url(${bg_10})`,}}/>
        </div>
      </div>
    </div>
  );
}

export default About;

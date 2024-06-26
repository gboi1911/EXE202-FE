import React, { useState } from "react";
import vector_2 from "../../assets/images/Vector_2.png";
import vector_6 from "../../assets/images/Vector_6.png";
import vector_4 from "../../assets/images/Vector_4.png";
import vector_1 from "../../assets/images/Vector_1.png";
import logo from "../../assets/images/logo.png";
import '../footer/footer.css';

const redirectToFacebook = () => {
  window.open('https://www.facebook.com/profile.php?id=61560856130286', '_blank');
};

function Footer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-full">      
      <div className="w-full bg-[rgba(81,113,244,0.1)]">
        <div className="w-full pt-36 pb-10 flex justify-evenly items-center">
          <div>
            <div
              className="w-[500px] h-[125px] bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
            <span className="flex w-[460px] h-[84px] justify-start items-start text-[18px] leading-[28px] text-[rgba(0,0,0,0.5)]">
              Art Spectrum là website kết nối những người yêu nghệ thuật. Đây là nơi mọi người có thể thảo luận về quan điểm nghệ thuật cũng như nơi mua bán tranh.
            </span>
          </div>
          <div className="w-1/2 flex justify-evenly items-baseline">
            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                TRUY CẬP 
              </span>
              <span className="flex justify-start items-start text-[18px] leading-[44px] text-[rgba(0,0,0,0.7)]">
                Giới thiệu
                <br />
                Liên hệ
                <br />
                Sản phẩm
                <br />
                Đăng nhập
                <br />
                Đăng ký
              </span>
            </div>

            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                KHÁCH HÀNG
              </span>

              <span className="flex justify-start items-start text-[18px] leading-[44px] text-[rgba(0,0,0,0.7)]">               
                <span onClick={handlePrivacyPolicyClick} className="cursor-pointer">
                  Chính sách
                </span>                
              </span>
            </div>
            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                LIÊN HỆ
              </span>

              <div className="flex justify-start items-center gap-6">
                <div
                  className="w-[48px] h-[51px] bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${vector_1})`,
                  }}
                />
                <div>
                  <span className="flex h-[24px] justify-start items-start text-[14px] leading-[24px] text-[#000]">
                    Vui lòng liên hệ với chúng tôi
                  </span>
                  <span className="flex h-[24px] justify-start items-start text-[18px] leading-[24px] text-[#ff7020]">
                    +84 967 278 848
                  </span>
                </div>
              </div>
              <span className="flex h-[24px] justify-start items-start mt-16 mb-6 text-[20px] font-semibold leading-[24px] text-[#000]">
                MẠNG XÃ HỘI
              </span>
              <div className="flex w-[130px] h-[58px] gap-[14px] items-center flex-nowrap">
                <div className="p-4 bg-gray-300 rounded-lg">
                  <div
                    className="w-[24px] h-[24px] shrink-0 bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url(${vector_6})`,
                    }}
                    onClick={redirectToFacebook}
                  />                
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className="flex justify-center items-start text-[24px] leading-[34px] text-[#000] text-center py-20"
          style={{
            borderTop: "2px solid #999",
          }}
        >
          Copyright © 2024 ArtSpectrum
        </span>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <div className="popup-text">
              <h2>Chính sách bảo mật</h2>
              <p>Chào mừng đến với Artspectrum. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng dịch vụ của chúng tôi. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo rằng thông tin cá nhân của bạn được bảo vệ. Dưới đây là thông tin về chính sách bảo mật của chúng tôi:</p>
              <h3>Thông tin cá nhân:</h3>
              <p>Khi bạn đăng ký tài khoản hoặc sử dụng nền tảng của chúng tôi, chúng tôi có thể thu thập các thông tin sau:</p>
              <ul>
                <li>Tên</li>
                <li>Đỉa chỉ Email</li>
                <li>Địa chỉ giao hàng</li>
                <li>Số điện thoại</li>
                <li>Thông tin thanh toán (số thẻ tín dụng, thông tin ngân hàng)</li>
              </ul>
              <p>Ngoài ra, chúng tôi còn có thể thu thập các thông tin cá nhân như:</p>
              <ul>
                <li>Địa chỉ IP</li>
                <li>Loại trình duyệt</li>
                <li>Hệ điều hành</li>
                <li>Lịch sử truy cập và tương tác với website</li>
              </ul>
              <h3>Cách chúng tôi sử dụng thông tin:</h3>
              <p>Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
              <ul>
                <li>Xử lý đơn hàng và thanh toán</li>
                <li>Cung cấp dịch vụ khách hàng</li>
                <li>Gửi thông tin sản phẩm, khuyến mãi và cập nhật</li>
                <li>Cải thiện dịch vụ và trải nghiệm người dùng</li>
                <li>Phân tích và nghiên cứu thị trường</li>
              </ul>
              <h3>Chia sẻ thông tin:</h3>
              <p>Chúng tôi sẽ không bán, trao đổi hoặc tiết lộ thông tin cá nhân của bạn cho bên thứ ba trừ khi có sự đồng ý của bạn hoặc trong các trường hợp sau:</p>
              <ul>
                <li>Để tuân thủ luật pháp và các quy định</li>
                <li>Để bảo vệ quyền và tài sản của chúng tôi</li>
                <li>Để cung cấp dịch vụ cho bạn thông qua các đối tác hoặc nhà cung cấp dịch vụ</li>
              </ul>
              <h3>Bảo mật thông tin:</h3>
              <p>Chúng tôi áp dụng các biện pháp bảo mật thích hợp để bảo vệ thông tin cá nhân của bạn khỏi bị truy cập, sử dụng, tiết lộ hoặc tiêu hủy bất hợp pháp. Những biện pháp này bao gồm:</p>
              <ul>
                <li>Mã hóa dữ liệu</li>
                <li>Kiểm soát truy cập vật lý và kỹ thuật số</li>
                <li>Giám sát hệ thống thường xuyên</li>
              </ul>
              <h3>Quyền lợi của bạn:</h3>
              <p>Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa thông tin cá nhân của mình. Nếu bạn muốn thực hiện quyền này, vui lòng liên hệ với chúng tôi qua artspectrumproject@gmail.com.</p>
              <h3>Thay đổi chính sách quyền riêng tư:</h3>
              <p>Chúng tôi có thể cập nhật chính sách quyền riêng tư này theo thời gian. Mọi thay đổi sẽ được thông báo trên trang web của chúng tôi và có hiệu lực ngay khi được đăng tải. Chúng tôi khuyến khích bạn thường xuyên kiểm tra để cập nhật những thông tin mới nhất.</p>
              <h3>Liên hệ:</h3>
              <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến chính sách quyền riêng tư này, vui lòng liên hệ với chúng tôi qua:</p>
              <p>Địa chỉ email: artspectrumproject@gmail.com</p>
              <p>Địa chỉ liên hệ: 0967278848</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

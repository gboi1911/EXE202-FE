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
              Art Spectrum is a site that connects art lovers. This is a location where people may discuss artistic perspectives, as well as where to purchase and sell paintings.
            </span>
          </div>
          <div className="w-1/2 flex justify-evenly items-baseline">
            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                QUICK LINKS
              </span>
              <span className="flex justify-start items-start text-[18px] leading-[44px] text-[rgba(0,0,0,0.7)]">
                About us
                <br />
                Contact us
                <br />
                Products
                <br />
                Login
                <br />
                Sign Up
              </span>
            </div>

            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                CUSTOMER AREA
              </span>

              <span className="flex justify-start items-start text-[18px] leading-[44px] text-[rgba(0,0,0,0.7)]">               
                <span onClick={handlePrivacyPolicyClick} className="cursor-pointer">
                  Privacy Policy
                </span>                
              </span>
            </div>
            <div>
              <span className="flex h-[24px] justify-start items-start mb-6 text-[20px] font-bold leading-[24px] text-[#000]">
                CONTACT
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
                    Have any question?
                  </span>
                  <span className="flex h-[24px] justify-start items-start text-[18px] leading-[24px] text-[#ff7020]">
                    +84 967 278 848
                  </span>
                </div>
              </div>
              <span className="flex h-[24px] justify-start items-start mt-16 mb-6 text-[20px] font-semibold leading-[24px] text-[#000]">
                SOCIAL
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
              <h2>Privacy Policy</h2>
              <p>Welcome to Artspectrum. This privacy policy explains how we collect, use, disclose and protect your personal information when you use our services. We are committed to protecting your privacy and ensuring that your personal information is protected. Below is information about our privacy policy:</p>
              <h3>Personal information:</h3>
              <p>When you register your account or use our platform, we can collect the following information:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Delivery address</li>
                <li>Phone number</li>
                <li>Payment information (credit card number, bank information)</li>
              </ul>
              <p>In addition, we can also collect personal information such as:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>History of access and interaction with the website</li>
              </ul>
              <h3>How we use information:</h3>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>Processing orders and payment</li>
                <li>Provide customer service</li>
                <li>Send product information, promotions and updates</li>
                <li>Improve service and user experience</li>
                <li>Market analysis and research</li>
              </ul>
              <h3>Share information:</h3>
              <p>We will not sell, exchange or disclose your personal information to third parties unless your consent or in the following cases:</p>
              <ul>
                <li>To comply with the laws and regulations</li>
                <li>To protect our rights and property</li>
                <li>To provide services for you through partners or service providers</li>
              </ul>
              <h3>Information security:</h3>
              <p>We apply appropriate security measures to protect your personal information from access, use, disclosure or illegal destruction. These measures include:</p>
              <ul>
                <li>Data encrypt</li>
                <li>Physical and digital access control</li>
                <li>System monitoring regularly</li>
              </ul>
              <h3>Your rights:</h3>
              <p>You have access, edit, or request to delete your personal information. If you want to exercise this right, please contact us via artspectrumproject@gmail.com.</p>
              <h3>Change of Privacy Policy:</h3>
              <p>We can update this privacy policy over time. All changes will be notified on our website and take effect as soon as it is posted. We encourage you to regularly check to update the latest information.</p>
              <h3>Contact:</h3>
              <p>If you have any questions or requirements related to this privacy policy, please contact us via:</p>
              <p>Email address: artspectrumproject@gmail.com</p>
              <p>Contact address: 0967278848</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

import { useNavigate, useLocation } from "react-router-dom";
import { checkoutSuccess } from "../../../api/cart";
function CheckoutSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderID = searchParams.get("orderID");
  const handleClick = () => {
    checkoutSuccess(orderID);
    navigate("/products");
  };
  return (
    <div className="flex flex-col gap-10 mt-10 items-center h-[500px]">
      <h1>Thanh toán thành công!</h1>
      <h2>Cảm ơn bạn đã mua tranh ở Artspectrum!</h2>
      <button
        className="w-[120px] h-[50px] rounded-2xl border-blue-gray-200 cursor-pointer hover:bg-blue-400"
        onClick={handleClick}
      >
        Trở về
      </button>
    </div>
  );
}

export default CheckoutSuccess;

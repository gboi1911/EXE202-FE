import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import { ModalContainer } from "../components/Modal";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ModalContainer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;

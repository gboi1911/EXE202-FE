import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "./store";
import MainLayout from "./layouts";
import "./assets/css/styles.scss";
import "./assets/css/tailwind.scss";
import Login from "./pages/main/Login";
import Register from "./pages/main/Register";
import Blogs from "./pages/main/Blogs";
import About from "./pages/About";
import ContactUs from "./pages/main/ContactUs";
import UploadArtwork from "./pages/main/UploadArtwork";
import Role from "./pages/main/Role";
import Products from "./pages/main/Products";
import ProductDetails from "./pages/main/ProductDetails";
import Home from "./pages/main/Home";
import Checkout from "./pages/main/Checkout";
import Cart from "./pages/main/Cart";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:paintingId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="uploadArtwork" element={<UploadArtwork />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/role" element={<Role />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

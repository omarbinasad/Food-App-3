import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddToCart from "./Pages/AddToCart/AddToCart";
import DeliveryLocation from "./Pages/DeliveryLocation/DeliveryLocation";
import FeedBack1 from "./Pages/FeedBack1/FeedBack1";
import FeedBackThankyou from "./Pages/FeedBackThankyou/FeedBackThankyou";
import Home from "./Pages/Home/Home";
import OrderCustomization from "./Pages/OrderCustomization/OrderCustomization";
import OrderTracking from "./Pages/OrderTracking/OrderTracking";
import Payment from "./Pages/Payment/Payment";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Profile from "./Pages/Profile/Profile";
import SplashScreen from "./Pages/SplashScreen/SplashScreen";
import ThanksForOrder from "./Pages/ThanksForOrder/ThanksForOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route
            path="/order-customization"
            element={<OrderCustomization />}
          ></Route>
          <Route path="/add-to-cart" element={<AddToCart />}></Route>
          <Route path="/thanks-for-order" element={<ThanksForOrder />}></Route>
          <Route path="/order-tracking" element={<OrderTracking />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/Delivery-Location"
            element={<DeliveryLocation />}
          ></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/splashScreen" element={<SplashScreen />}></Route>
          <Route path="/feedback-1" element={<FeedBack1 />}></Route>
          <Route path="/splash-screen" element={<SplashScreen />}></Route>
          <Route
            path="/feedback-thankyou"
            element={<FeedBackThankyou />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

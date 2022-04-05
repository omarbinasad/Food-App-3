import React from "react";
import { Link } from "react-router-dom";
import "./ThanksForOrder.css";

const ThanksForOrder = () => {
  return (
    <div>
      <div className="container tfo-wraper">
        <h3>Thanks for Order</h3>
        <img className="img-fluid" src="/images/check.png" alt="check-img" />

        <div className="tfo-texts-div">
          
          <h2>Your Order is Successfully placed.</h2>
          <p>Your Order Number is 8077</p>
        </div>

        <button className="tfo-order-detail-btn">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/add-to-cart"
          >
            ORDER DETAIL <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ThanksForOrder;

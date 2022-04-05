import React from "react";
import { Link } from "react-router-dom";
import "./TotalPrice.css";

const TotalPrice = () => {
  return (
    <div className="total-price-div px-4">
      <h3 className="text-center">Total Price: ₹25.25</h3>
      <button className="">
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/add-to-cart"
        >
          Place Order <i class="fa-solid fa-arrow-right-long"></i>{" "}
        </Link>
      </button>
    </div>
  );
};

export default TotalPrice;

import React from "react";
import "./ProductDetailsTopBar.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ProductDetailsTopBar = () => {
  return (
    <div className="container">
      <div className="productDetailsTopBar">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>

        <button className="productDetails-customizeBtn">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/order-customization"
          >
            <EditIcon /> Customize Order
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsTopBar;

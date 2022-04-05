import React from "react";
import "./SingleCard.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const SingleCard = () => {
  return (
    <div className="SingleCard">
      <div className="card-top">
        <p>Kashmiri Chicken Birya..</p>
        <Fab
        className="card-fab-btn"
          size="small"
          sx={{
            backgroundColor: "#FFEEE4",
            color: "#FF5C00",
            boxShadow: "none",
            zIndex: "0",
            "&:hover": {
              backgroundColor: "#FFEEE4",
            },
          }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
      <div className="card-middle">
        <div className="card-middle-rating-div">
          <i className="fa-solid fa-star"></i>
          <h5>
            4<span>/5</span>
          </h5>
        </div>
        <div className="card-middle-img-div">
          <img src="/images/foodImg.png" alt="" />
        </div>
      </div>
      <div className="card-bottom">
        <h3>₹95.00</h3>
        <button className="card-bottom-btn">
          <Link to="/product-details">
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;

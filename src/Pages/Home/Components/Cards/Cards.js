import React from "react";
import SingleCard from "./singleCard.js/SingleCard";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards-div">
        <SingleCard />
        <SingleCard />
      </div>
      <div className="mt-5 cards-div collapse" id="viewdetails">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
      <div className="cards-exp-btn-div mt-4">
        <button
          className="cards-exp-btn btn"
          data-bs-toggle="collapse"
          data-bs-target="#viewdetails"
        >
          View All <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </>
  );
};

export default Cards;

import React from "react";
import "./BestOffers.css";

const BestOffers = () => {
  return (
    <div className="container">
      <div className="bestOffers-title-div">
        <h3 className="bestOffers-title text-start or-divider">Best Offers</h3>
        <a href="/">See all</a>
      </div>
      {/* scrollable tab start */}

      <div className="bestOffers-div-main">
        <div className="bestOffer-div">
          <div className="bestOffers-img-div">
            <img className="img-fluid" src="/images/bestoffer.png" alt="" />
          </div>
          <div className="bestOffers-text-div">
            <p>Get Fresh Start At 50/- only</p>
          </div>
          <div className="bestOffers-btn-div">
            <button className="bestOffers-btn">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        <div className="bestOffer-div">
          <div className="bestOffers-img-div">
            <img className="img-fluid" src="/images/bestoffer2.png" alt="" />
          </div>
          <div className="bestOffers-text-div">
            <p>Get Fresh Start At 50/- only</p>
          </div>
          <div className=" bestOffers-btn-div">
            <button className="bestOffers-btn">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffers;

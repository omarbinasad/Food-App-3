import React from "react";
import { Link } from "react-router-dom";
import "./OrderTracking.css";
const OrderTracking = () => {
  return (
    <div className="OTC-page">
      <div className="container order-tracking-top-bar">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="order-tracking-main-wraper container">
        <div className="order-tracking-text-div">
          <h2>Order Tracking</h2>
          <h3>Your food is "On the way"</h3>
          {/* stepper progress */}
          {/* <ul className="order-progress-wraper">
            <li>
              <img
                className="img-fluid"
                src="images/cooking.png"
                id="progress-img"
                alt=""
              />
              <p>Cooking</p>
            </li>
            <span>
              <img className="img-fluid" src="images/Line.png" alt="" />
            </span>
            <li>
              <div className="bike-img-div">
                <img className="img-fluid" src="images/motorbike.png" alt="" />
              </div>
              <p>On the way</p>
            </li>
            <span>
              <img className="img-fluid" src="images/Line.png" alt="" />
            </span>
            <li>
              <img className="img-fluid" src="images/delivery.png" alt="" />
              <p>Delivery</p>
            </li>
          </ul> */}
        </div>
        <div class="OTC-progress-steper-container">
          <section class="step-indicator">
            <div class="step step1 ">
              <div class="step-icon active">
                <img
                  className="img-fluid"
                  src="images/cooking.png"
                  id="progress-img"
                  alt=""
                />
              </div>
              <p>Cooking</p>
            </div>
            <div class="indicator-line active"></div>
            <div class="step step2 active">
              <div class="step-icon active">
                <img className="img-fluid" src="images/motorbike.png" alt="" />
              </div>
              <p>On the way</p>
            </div>
            <div class="indicator-line"></div>
            <div class="step step3">
              <div class="step-icon">
                <img className="img-fluid" src="images/delivery.png" alt="" />
              </div>
              <p>Delivery</p>
            </div>
          </section>
        </div>

        <div className="OTC-main-img-div">
          <img className="img-fluid" src="images/deliveryman.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;

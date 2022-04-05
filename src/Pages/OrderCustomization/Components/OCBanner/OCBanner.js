import React from "react";
import { Link } from "react-router-dom";
import "./OCBanner.css";

const OCBanner = () => {
  return (
    <section className="">
      <div className="container oc-top-bar">
        <Link to="/">
          <i className="text-white fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid"
          src="https://i.ibb.co/9cTsrZY/unsplash-6-M9m-Zoo4-KM0.png"
        ></img>
      </div>
    </section>
  );
};

export default OCBanner;

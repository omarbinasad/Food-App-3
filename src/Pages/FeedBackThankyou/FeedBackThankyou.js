import React from "react";

import "./FeedBackThankyou.css";

const FeedBackThankyou = () => {
  return (
    <div className="feedBack-thankyou-main-wraper">
      <div className="feedBack-thankyou-banner"></div>
      <div className="fb-thanq-half-div-wraper">
        <img
          className="fb-thanq-img img-fluid fb-thnq-img"
          src="images/thanqImg.png"
          alt=""
        />
        <div>
          <h3 className="fb-thnq-title">Thanks for your feedback!</h3>
          <p className="fb-thnq-desc">
            We’re really sorry you bad experience. Your feedback will help us
            improve our service.
          </p>
        </div>

        <button className="feedBack-close-btn">Close</button>
      </div>
    </div>
  );
};

export default FeedBackThankyou;

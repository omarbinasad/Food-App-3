import React from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHouse,
  faBriefcase,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Payment = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="container">
      <section className="container py-4">
        <div className="d-flex ">
          <Link style={{ textDecoration: "none" }} to="/">
            <p style={{ color: "#7C90B8" }}>
              <FontAwesomeIcon
                style={{ corlo: "#7C90B8" }}
                icon={faArrowLeft}
              ></FontAwesomeIcon>
              Back
            </p>
          </Link>
          <h4 className="text-center text-dark mx-auto">Payment</h4>
        </div>
      </section>
      <section className="container">
        <h3>Payment Method</h3>
      </section>
      <section className="my-2">
        <Card
          style={{ backgroundColor: "#01058B" }}
          className="w-100 formCard container"
        >
          <Card.Body className="payment-card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  style={{ width: "74px", height: "23px" }}
                  className=" d-flex align-items-center"
                  src="https://i.ibb.co/NCf8nDZ/path3789.png"
                ></img>
                <div>
                  <p className="text-white ms-2 ">
                    Debit Card <br></br> <span> 9520**** ****2142 </span>
                  </p>
                </div>
              </div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="my-2">
        <Card
          style={{ backgroundColor: "#121A2C" }}
          className="w-100 formCard container"
        >
          <Card.Body className="payment-card-body">
            <div className="d-flex justify-content-between ">
              <div className="d-flex  align-items-center">
                <img
                  style={{ width: "74px", height: "62px" }}
                  className="d-flex align-items-center"
                  src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
                ></img>
                <div>
                  <p className="text-white ms-2 ">
                    Debit Card <br></br> <span> 9520**** ****2142 </span>
                  </p>
                </div>
              </div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="my-2">
        <Card
          style={{ backgroundColor: "#E1EBEB " }}
          className="w-100 formCard container"
        >
          <Card.Body className="payment-card-body">
            <div className="d-flex justify-content-between ">
              <div className="d-flex  align-items-center">
                <img
                  style={{ width: "74px", height: "62px" }}
                  className="d-flex align-items-center"
                  src="https://i.ibb.co/VqwCMQp/image-353.png"
                ></img>
                <div>
                  <p className="text-dark ms-2 ">
                    Debit Card <br></br> <span> 9520**** ****2142 </span>
                  </p>
                </div>
              </div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="my-2">
        <Card
          style={{ backgroundColor: "#ECF6FF " }}
          className="w-100 formCard container"
        >
          <Card.Body className="payment-card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex  align-items-center">
                <img
                  style={{ width: "74px", height: "62px" }}
                  className="d-flex align-items-center"
                  src="https://i.ibb.co/xmxgj9j/Insurance-Business-protect-money-logo-by-DEEMKA-STUDIO-580x406-removebg-preview.png"
                ></img>
                <div>
                  <p className="text-dark ms-2 ">I Will Pay HandCash</p>
                </div>
              </div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className=" container mt-3">
        <h3 className="delivery-adress-title">Delivery Address</h3>
        <p className="delivery-tableNo-text">Table no: (Optional)</p>

        <div className="orderForm-div">
          <form className="orderForm" action="">
            <input type="text" placeholder="Order no." />
          </form>
        </div>

        <section className="d-flex justify-content-between my-4 mx-auto">
          <div className="payment-totalPrice-text-div">
            <p className=" text-dark w-100 mb-1">Total Price</p>
            <h4 className="text-dark">$50.40</h4>
          </div>
          <Link to="/thanks-for-order">
            <button
              // style={{ height: "60px", width: "200px" }}
              className="payment-place-order-btn button-praimary "
            >
              Place Order
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Payment;

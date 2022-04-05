import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHouse,
  faBriefcase,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Form } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

const DeliveryLocation = () => {
  return (
    <div className="container">
      <div>
        <section className="container p-5">
          <div className="d-flex ">
            <p style={{ color: "#7C90B8" }}>
              <FontAwesomeIcon
                style={{ corlo: "#7C90B8" }}
                icon={faArrowLeft}
              ></FontAwesomeIcon>
              Back
            </p>

            <h4 className="text-center text-dark mx-auto">Add Location</h4>
          </div>
        </section>
        <section className="container">
          <form>
            <h5>Name</h5>
            <input
              className="form-style"
              placeholder="Ex : Jubair Zaman"
            ></input>
            <hr></hr>
            <h5>Phone Number</h5>
            <input
              className="form-style"
              placeholder="+123  456 789 012"
            ></input>
            <hr></hr>
            <h5>Area</h5>
            <input
              className="form-style"
              placeholder="Ex : Jubair Zaman"
            ></input>
            <hr></hr>
            <h5>City</h5>
            <input
              className="form-style"
              placeholder="Ex : Jubair Zaman"
            ></input>
            <hr></hr>
            <h5>Region</h5>
            <input
              className="form-style"
              placeholder="Ex : Jubair Zaman"
            ></input>
            <hr></hr>
            <h5>Indicate the details of the address</h5>
            <input
              className="form-style"
              placeholder="Ex : Jubair Zaman"
            ></input>
            <hr></hr>
          </form>
        </section>
        <section className="mt-2">
          <Card className="w-100 formCard ">
            <Card.Body>
              <p
                style={{
                  color: "#516787",
                  fontSize: "1rem",
                }}
              >
                Select a label for effective delivery
              </p>

              <div className="my-2 d-flex justify-content-center ">
                <button
                  style={{
                    width: "50%",
                  }}
                  className="button-praimary px-lg-5 px-sm-3  py-2 mx-2"
                >
                  <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home
                </button>
                <button
                  style={{
                    width: "50%",
                  }}
                  className="button-praimary px-lg-5 px-sm-3  py-2 mx-2"
                >
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon> Office
                </button>
              </div>
            </Card.Body>
          </Card>
        </section>
        <section className="my-2">
          <Card className="w-100 formCard container">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    color: "#516787",
                  }}
                >
                  {" "}
                  Create default shipping address
                </p>
                <FormControlLabel control={<Switch color="warning" />} />
              </div>
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    color: "#516787",
                  }}
                >
                  {" "}
                  Create default billing address
                </p>
                <FormControlLabel control={<Switch color="warning" />} />
              </div>
            </Card.Body>
          </Card>
        </section>
        <section className="my-2">
          <Card className="w-100 formCard container">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <p
                  style={{
                    color: "#516787",
                    marginBottom: "0",
                  }}
                >
                  Delete address
                </p>
                <FontAwesomeIcon
                  style={{ color: "#FF5C00" }}
                  className="mt-1"
                  icon={faTrash}
                ></FontAwesomeIcon>
              </div>
            </Card.Body>
          </Card>
        </section>

        <section className="d-flex justify-content-center my-3">
          <button className="button-praimary px-5 py-2 mx-2">Save</button>

          <br></br>
        </section>
      </div>
    </div>
  );
};

export default DeliveryLocation;

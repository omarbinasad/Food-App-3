import React from "react";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import BottomNavBar from "../../Shared/BottomNavBar/BottomNavBar";

const Input = styled("input")({
  display: "none",
});
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="container profile-main-div">
          <div className="profile-top-bar">
            <Link to="/">
              <i className="fa-solid fa-arrow-left-long"></i> Back
            </Link>
            <h3>Profile</h3>
          </div>
          <div className="row profile-contents-wraper">
            <div className="col-3"></div>
            <div className="profile-contents-div col-6">
              <div
                style={{
                  position: "relative",
                }}
                className="profile-img-div"
              >
                <img src="images/profilepic.png" alt="" />
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    sx={{
                      position: "absolute",
                      backgroundColor: "white",
                      boxShadow: "0px 2px 5px rgba(28, 41, 65, 0.15)",
                      // top: "50%",
                      // right: "30px",
                      marginLeft: "-30px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                    color="default"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
              <div className="profile-users-nameRole-div">
                <h2 className="profile-users-name">John Doe</h2>
                <p className="profile-users-role">Business Magnet</p>
              </div>
            </div>
            <div className="profile-edit-btn-div col-3">
              <button>
                <EditIcon />
                Edit
              </button>
            </div>
          </div>

          <div className="profile-desc-div">
            <label>Phone</label>
            <input
              className="profile-desc-input"
              type="text"
              value="+0123456789"
            />
            <label>Email</label>
            <input
              className="profile-desc-input"
              type="email"
              value="hello@website.com"
            />
            <label>About Me</label>
            <p className="text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis a placeat illo soluta praesentium, vel possimus ipsum
              saepe consequuntur facilis.
            </p>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default Profile;

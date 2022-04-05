import React from "react";
import "./FeedBack3.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="varietions-main"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const FeedBack3 = () => {
  const [value, setValue] = React.useState(1);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="FeedBack3-main-wraper">
      <div className="FeedBack3-banner"></div>
      <div className="FeedBack3-half-div-wraper">
        <div className="FeedBack3-rating-div">
          <div className="FeedBack3-imoji-div">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ width: "100%", borderBottom: 0 }}>
                <Tabs
                  className="feedback-tabs-main"
                  sx={{
                    // marginTop: "-70px",
                    width: "100%",
                    backgroundColor: "transparent",
                    padding: "0px",
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  textColor="white"
                  variant="fullWidth"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Tab
                    label="Tasty"
                    sx={{
                      //   margin: "50px 0px",
                      fontFamily: "georgia",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      textTransform: "capitalize",
                     
                      "&.Mui-selected": {
                        color: "#FF5C00",

                        ".rating-tab-img": {
                          borderRadius: "50%",
                          padding: "8px",
                          backgroundColor: "#c0d3ec79",
                        },
                      },
                    }}
                    icon={
                      <img
                        className="rating-tab-img"
                        width="80px"
                        alt="test avatar"
                        src="images/tasty.png"
                      />
                    }
                    aria-label="phone"
                  />
                  <Tab
                    label="Good"
                    sx={{
                      //   margin: "50px 0px",

                      fontFamily: "georgia",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      textTransform: "capitalize",
                      "&.Mui-selected": {
                        color: "#FF5C00",
                        ".rating-tab-img": {
                          borderRadius: "50%",
                          padding: "8px",
                          backgroundColor: "#c0d3ec79",
                        },
                      },
                    }}
                    icon={
                      <img
                        className="rating-tab-img"
                        width="80px"
                        alt="test avatar"
                        src="images/good.png"
                      />
                    }
                    aria-label="phone"
                  />
                  <Tab
                    label="Bad!"
                    sx={{
                      height: "25vh",
                      marginBottom: "50px 0px",
                      fontFamily: "georgia",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      textTransform: "capitalize",
                      position: "relative",

                      "&.Mui-selected": {
                        color: "red",
                        ".rating-tab-img": {
                          borderRadius: "50%",
                          padding: "8px",
                          backgroundColor: "#c0d3ec79",
                        },

                        "&::after": {
                          content: "'What went wrong?'",
                          color: "#586f9196",
                          fontSize: "12px",
                          position: "absolute",
                          top: "80%",
                        },
                      },
                    }}
                    icon={
                      <img
                        className="rating-tab-img"
                        width="80px"
                        alt="test avatar"
                        src="images/bad.png"
                      />
                    }
                    aria-label="phone"
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="FeedBack3-tab-items">
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Poor service</button>
                    <button className="">Too much oily</button>
                  </div>
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Bad Food</button>
                    <button className="">Bad taste</button>
                  </div>
                  <div className="fb3-avrgtaste-btn-div">
                    <button className="fb3-avrgtaste-btn">
                      Taste is average
                    </button>
                  </div>
                  <div className="FeedBack3-sugestion-txt-div">
                    <h3>Suggestion/Advice</h3>
                    <textarea
                      placeholder="Write feedback here..."
                      name=""
                      id=""
                      cols="50"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="FeedBack3-tab-items">
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Poor service</button>
                    <button className="">Too much oily</button>
                  </div>
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Bad Food</button>
                    <button className="">Bad taste</button>
                  </div>
                  <div className="fb3-avrgtaste-btn-div">
                    <button className="fb-avrgtaste-btn">
                      Taste is average
                    </button>
                  </div>
                  <div className="FeedBack3-sugestion-txt-div">
                    <h3>Suggestion/Advice</h3>
                    <textarea
                      placeholder="Write feedback here..."
                      name=""
                      id=""
                      cols="50"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="FeedBack3-tab-items">
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Poor service</button>
                    <button className="">Too much oily</button>
                  </div>
                  <div className="fb3-tab-btns-wraper">
                    <button className="">Bad Food</button>
                    <button className="">Bad taste</button>
                  </div>
                  <div className="fb3-avrgtaste-btn-div">
                    <button className="fb3-avrgtaste-btn">
                      Taste is average
                    </button>
                  </div>
                  <div className="FeedBack3-sugestion-txt-div">
                    <h3>Suggestion/Advice</h3>
                    <textarea
                      placeholder="Write feedback here..."
                      name=""
                      id=""
                      cols="50"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </TabPanel>
            </Box>
          </div>
        </div>
        <button className="FeedBack3-send-btn">
          <Link to="/feedback-thankyou">
            SEND <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FeedBack3;

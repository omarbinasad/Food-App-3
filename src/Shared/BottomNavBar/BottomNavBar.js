import React from "react";
import "./BottomNavBar.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="BottomNavBar-main-div">
      <Box
        sx={{
          width: "100%",
          margin: "auto",
        }}
      >
        <BottomNavigation
          sx={{
            color: "#7C90B8",
            backgroundColor: "white",
            boxShadow: "0px -8px 30px rgba(111, 120, 130, 0.05)",
            height: "70px",
            borderRadius: "30px 30px 0px 0px",
            width: "100%",
            position: "fixed",
            bottom: 0,
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            sx={{
              color: "#7C90B8",
              "&:hover": {
                color: "#7C90B8",

                color: "#FF5C00",
              },
              "&.Mui-selected": {
                color: "#FF5C00",

                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "50px",
                  height: "15px",
                  backgroundImage: "url('/images/bNavActive.png') ",
                  backgroundSize: "35px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "translateY(200%)",
                },
              },
            }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{
              color: "#7C90B8",
              "&:hover": {
                color: "#7C90B8",

                color: "#FF5C00",
              },
              "&.Mui-selected": {
                color: "#FF5C00",
                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "50px",
                  height: "15px",
                  backgroundImage: "url('/images/bNavActive.png') ",
                  backgroundSize: "35px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "translateY(200%)",
                },
              },
            }}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/add-to-cart"
            sx={{
              color: "#7C90B8",
              "&:hover": {
                color: "#7C90B8",

                color: "#FF5C00",
              },
              "&.Mui-selected": {
                color: "#FF5C00",
                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "50px",
                  height: "15px",
                  backgroundImage: "url('/images/bNavActive.png') ",
                  backgroundSize: "35px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "translateY(200%)",
                },
              },
            }}
            label="Cart"
            icon={<ShoppingCartIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/profile"
            sx={{
              color: "#7C90B8",
              "&:hover": {
                color: "#7C90B8",

                color: "#FF5C00",
              },
              "&.Mui-selected": {
                color: "#FF5C00",
                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "50px",
                  height: "15px",
                  backgroundImage: "url('/images/bNavActive.png') ",
                  backgroundSize: "35px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "translateY(200%)",
                },
              },
            }}
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNavBar;

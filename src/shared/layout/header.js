import { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalContext/globalContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const { state } = useContext(GlobalContext);
  // states for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  // (React.useState < null) | (HTMLElement > null);
  const open = anchorEl;
  // handler to open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // handler to close menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("state", state);
  return (
    <header className="header_container">
      {/* left side logo */}
      <div className="left-side">
        <div className="logo_container">
          <img
            src={require("../../assets/logo/logo.png")}
            alt=""
            className="logo"
          />
        </div>
      </div>
      {/* middler content */}
      <div className="bts_content_container">
        <ul className="font_proximanova_regular">
          <li
            className="border-r"
            dangerouslySetInnerHTML={{
              __html: state?.data?.header?.link1,
            }}
          />
          <li
            className="border-r"
            dangerouslySetInnerHTML={{
              __html: state?.data?.header?.link2,
            }}
          />
          <li
            className="border-r"
            dangerouslySetInnerHTML={{
              __html: state?.data?.header?.link3,
            }}
          />
          <li
            className="border-r"
            dangerouslySetInnerHTML={{
              __html: state?.data?.header?.link4,
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: state?.data?.header?.link5,
            }}
          />
        </ul>
      </div>
      {/* right side button*/}
      <div className="button_container">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="button"
          variant="contained"
          size="large"
        >
          <span className="font_proximanova_bold">
            {state?.data?.header?.button}
          </span>
          <KeyboardArrowDownIcon className="downarrow" />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};
export default Header;

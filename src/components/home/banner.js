import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext/globalContext";
// breadcrumbs
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// icon
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Banner = () => {
  const { state } = useContext(GlobalContext);
  // breadcrumbs array
  const breadcrumbs = [
    // breadcrumb 1
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      className="breadcrumb_1 font_proximanova_bold"
    >
      {state?.data?.homepage?.category}
    </Link>,
    // breadcrumb 2
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      className="breadcrumb_normal font_proximanova_regular"
    >
      <LocationOnOutlinedIcon />
      <span> {state?.data?.homepage?.location}</span>
    </Link>,
    // breadcrumb 3
    <Typography key="3" className="breadcrumb_normal font_proximanova_regular">
      <CalendarMonthOutlinedIcon />
      <span> {state?.data?.homepage?.date}</span>
    </Typography>,
  ];
  return (
    <section className="banner_container">
      {/* left side */}
      <div className="left_side_content">
        <div className="breadcrumbs_content_container">
          <Stack spacing={2}>
            <Breadcrumbs separator="" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <div className="content_container">
            <h2 className="font_proximanova_bold">
              {state?.data?.homepage?.section1Title}
            </h2>
            <p className="font_proximanova_regular">
              {state?.data?.homepage?.section1content}
            </p>
            <p className="font_proximanova_regular">
              {state?.data?.homepage?.section1content2}
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="right_side_image">
        <div>
          <img src={require("../../assets/images/banner/banner.png")} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Banner;

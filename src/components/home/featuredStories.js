import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext/globalContext";
// cards
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// carousel
import Carousel from "react-multi-carousel";
// images
import Image1 from "../../assets/images/featured/1.png";
import Image2 from "../../assets/images/featured/2.png";
import Image3 from "../../assets/images/featured/3.png";
// icon
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const FeaturedStories = () => {
  const { state } = useContext(GlobalContext);
  // carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // custom button groups
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        {" "}
        <div
          className={`${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        >
          {/* <WestIcon /> */}
          <img src={require("../../assets/icons/leftIcon.png")} alt="" />
        </div>
        <div
          className={`button2 ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => next()}
        >
          {/* <EastIcon /> */}
          <img src={require("../../assets/icons/rightIcon.png")} alt="" />
        </div>
      </div>
    );
  };
  // records
  const featured_records = [
    {
      id: 1,
      title: "Title of the Story will go here...",
      content:
        "Cursus fames vel donec amet. Varius ultrices ac malesuada lacinia proin. Lectus malesua...",
      img: Image1,
    },
    {
      id: 2,
      title: "Title of the Story will go here...",
      content:
        "Cursus fames vel donec amet. Varius ultrices ac malesuada lacinia proin. Lectus malesua...",
      img: Image2,
    },
    {
      id: 3,
      title: "Title of the Story will go here...",
      content:
        "Cursus fames vel donec amet. Varius ultrices ac malesuada lacinia proin. Lectus malesua...",
      img: Image3,
    },
    {
      id: 4,
      title: "Title of the Story will go here...",
      content:
        "Cursus fames vel donec amet. Varius ultrices ac malesuada lacinia proin. Lectus malesua...",
      img: Image1,
    },
  ];
  return (
    <section className="featured_container">
      {/* left side */}
      <div className="left_side_content">
        <div className="content_arrow_container">
          <h3 className="font_proximanova_bold">
            {state?.data?.homepage.section2Title}
          </h3>
          <p className="font_proximanova_regular">
            {state?.data?.homepage.section2Content}
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="right_side_cards">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
        >
          {featured_records.map((item) => (
            <Card className="single-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent className="card-content">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    className="font_proximanova_regular"
                  >
                    {item.title}
                  </Typography>
                  <div className="location_date_container">
                    <div className="detail font_proximanova_regular">
                      <LocationOnOutlinedIcon />
                      <span>Dubai, UAE</span>
                    </div>
                    <div className="detail font_proximanova_regular">
                      <CalendarMonthOutlinedIcon />
                      <span>2 - 3 June 2022</span>
                    </div>
                  </div>
                  <Typography className="content font_proximanova_regular">
                    {item.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default FeaturedStories;

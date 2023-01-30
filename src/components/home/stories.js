import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// carousel
import Carousel from "react-multi-carousel";
// images
import Image1 from "../../assets/images/banner/Rectangle1.png";
import Image2 from "../../assets/images/banner/Rectangle2.png";
import Image3 from "../../assets/images/banner/Rectangle3.png";
// icon
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const Stories = () => {
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
  return (
    <section className="stories_container">
      <div className="stories_cards_container">
        <Carousel responsive={responsive} infinite={true}>
          {featured_records.map((item) => (
            <div className="single-card">
              <CardActionArea className="card-content">
                <CardMedia component="img" image={Image1} alt="green iguana" />
                <CardContent>
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
                      <CalendarMonthOutlinedIcon />
                      <span>2 - 3 June 2022</span>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default Stories;

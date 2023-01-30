import Banner from "../../components/home/banner";
import Stories from "../../components/home/stories";
import FeaturedStories from "../../components/home/featuredStories";

const Home = () => {
  return (
    <div className="homepage_container">
      <Banner />
      <Stories />
      <FeaturedStories />
    </div>
  );
};
export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import FeaturedWorks from "../components/FeaturedWorks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </>
  );
};

export default Home;

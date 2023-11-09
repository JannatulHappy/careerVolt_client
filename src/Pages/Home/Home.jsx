import React from "react";
import Banner from "./Banner/Banner";
import BrowseCategory from "./BrowseCategory/BrowseCategory";
import { Helmet } from "react-helmet-async";
import NewsLetter from "../../componenets/NewsLetter/NewsLetter";
import Testimonial from "../../componenets/Testimonial/Testimonial";
import Stat from "../../componenets/Stat/Stat";
import Ticket from "../../componenets/Ticket/Ticket";
import UserTestimonial from "../../componenets/UserTestimonial/UserTestimonial";
const Home = () => {
  const websiteName = "Career Volt";
  return (
    <div>
      <Helmet>
        <title>{`${websiteName} | Home`}</title>
      </Helmet>
      <Banner></Banner>
      <BrowseCategory></BrowseCategory>
      {/* <Testimonial></Testimonial> */}

      <Stat></Stat>
      <Ticket></Ticket>
      <UserTestimonial></UserTestimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;

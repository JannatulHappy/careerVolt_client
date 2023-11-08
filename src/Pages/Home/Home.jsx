import React from 'react';
import Banner from './Banner/Banner';
import BrowseCategory from './BrowseCategory/BrowseCategory';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const websiteName = "Career Volt";
    return (
      <div>
        <Helmet>
          <title>{`${websiteName} | Home`}</title>
        </Helmet>
        <Banner></Banner>
        <BrowseCategory></BrowseCategory>
      </div>
    );
};

export default Home;
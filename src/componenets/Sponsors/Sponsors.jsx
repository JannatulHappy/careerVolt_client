import React from 'react';
import Sponsor01 from "../../assets/logoipsum-logo-4.png";
import Sponsor02 from "../../assets/logoipsum-logo-5.png";
import Sponsor03 from "../../assets/logoipsum-logo-6.png";
import Sponsor04 from "../../assets/logoipsum-logo-8.png";
const Sponsors = () => {
    return (
      <div className="px-5 py-10 mx-auto max-w-7xl">
        <div
          className="pt-5 pb-20 text-center "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-4xl font-bold tracking-wide py-9 lg:text-5xl md:text-5xl ">
            The Sponsors
          </h1>
          <p className="w-40 mx-auto border-b-8 border-blue02"></p>
        </div>

        <div className="grid grid-cols-2 gap-24 py-20 md:grid-cols-4 lg:grid-cols-4">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor01}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor02}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor03}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor04}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor02}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor04}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor01}
            alt=""
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Sponsor03}
            alt=""
          />
        </div>
      </div>
    );
};

export default Sponsors;
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import bannerImg01 from "../../../assets/banner01.png";
import bannerImg02 from "../../../assets/banner02.png";
import bannerImg03 from "../../../assets/banner03.png";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px", color: "white" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-secondary mb-[-7px]">
      <div className="flex flex-col items-center justify-center px-5 mx-auto text-white max-w-7xl lg:flex-row">
        <div className="w-10/12 mt-10 lg:mb-10 lg:w-3/12 md:mb-0">
          <motion.h1
            className="text-4xl leading-tight sm:text-5xl"
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, originX: 0 }}
          >
            Place Where Opportunities are Found
          </motion.h1>
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 mt-10 mb-2 ml-2 text-base font-medium text-center text-white border border-blue-700 rounded-lg sm:py-5 hover:text-primary bg-primary hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            JOBS LISTING
          </button>
        </div>
        <div className="w-11/12 lg:w-9/12 ">
          <div className="">
            <Slider {...settings} className="relative ">
              <div className="absolute flex items-center justify-center bottom-[6px]">
                <img className="w-[300px] lg:w-[400px]" src={bannerImg01} alt="" />
              </div>
              <div className="pl-5 text-white lg:my-16">
                <div>
                  <div className="relative flex flex-col items-center w-full p-2 bg-white shadow-md cursor-pointer lg:p-6 group hover:bg-primary md:p-8">
                    <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
                      <svg
                        width={70}
                        height={70}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="#5f63ff"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="#5f63ff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="mt-4 leading-normal text-center lg:text-lg xl:w-96">
                        When our designs need an expert opinion or approval, I
                        know I can rely on your agency Thank you for all your
                        help-I will be recommending you to everyone
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                      <img
                        src={bannerImg01}
                        alt="profile pictre"
                        className="w-16 h-16 px-2 py-2 rounded-full bg-primary mask mask-parallelogram"
                      />
                      <p className="my-2 text-base font-semibold leading-4 text-gray-800">
                        Tom Koch
                      </p>
                      <p className="text-base leading-4 text-center text-gray-600">
                        CEO of Unicorn
                      </p>
                    </div>
                    <div className="absolute bottom-0 -mb-6 text-white group-hover:text-orange">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_dd"
                            x="0.741699"
                            y="0.25"
                            width="32.5167"
                            height="27.75"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feMorphology
                              radius={1}
                              operator="erode"
                              in="SourceAlpha"
                              result="effect1_dropShadow"
                            />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={3} />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy={2} />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow"
                              result="effect2_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center bottom-1 ">
                <img width={360} src={bannerImg02} alt="" />
              </div>
              <div className="pl-5 text-white ">
                <div>
                  <div className="relative flex flex-col w-full bg-white shadow-md cursor-pointer group hover:bg-primary md:p-12">
                    <div className="flex flex-col text-gray-600 group-hover:text-white">
                      <svg
                        width={70}
                        height={70}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="#5f63ff"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="#5f63ff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="mt-4 text-lg leading-normal text-left xl:w-96">
                        When our designs need an expert opinion or approval, I
                        know I can rely on your agency Thank you for all your
                        help-I will be recommending you to everyone
                      </p>
                    </div>
                    <div className="flex flex-col mt-10">
                      <img
                        src={bannerImg02}
                        alt="profile pictre"
                        className="w-16 h-16 px-2 py-2 rounded-full bg-primary mask mask-parallelogram"
                      />
                      <p className="my-2 text-base font-semibold leading-4 text-gray-800">
                        Tom Koch
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        CEO of Unicorn
                      </p>
                    </div>
                    <div className="absolute bottom-0 -mb-6 text-white group-hover:text-orange">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_dd"
                            x="0.741699"
                            y="0.25"
                            width="32.5167"
                            height="27.75"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feMorphology
                              radius={1}
                              operator="erode"
                              in="SourceAlpha"
                              result="effect1_dropShadow"
                            />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={3} />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy={2} />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow"
                              result="effect2_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1">
                <img width={400} className="" src={bannerImg03} alt="" />
              </div>
              <div className="pl-5 text-white ">
                <div>
                  <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-md cursor-pointer group hover:bg-primary md:p-8">
                    <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
                      <svg
                        width={70}
                        height={70}
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                            fill="#5f63ff"
                          />
                          <path
                            d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                            fill="#5f63ff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="24.5767"
                              height={27}
                              fill="white"
                              transform="translate(25.2578 27) rotate(-180)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="mt-4 text-lg leading-normal text-center xl:w-96">
                        When our designs need an expert opinion or approval, I
                        know I can rely on your agency Thank you for all your
                        help-I will be recommending you to everyone
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                      <img
                        src={bannerImg03}
                        alt="profile pictre"
                        className="w-16 h-16 px-2 py-2 rounded-full bg-primary mask mask-parallelogram"
                      />
                      <p className="my-2 text-base font-semibold leading-4 text-gray-800">
                        Tom Koch
                      </p>
                      <p className="text-base leading-4 text-center text-gray-600">
                        CEO of Unicorn
                      </p>
                    </div>
                    <div className="absolute bottom-0 -mb-6 text-white group-hover:text-orange">
                      <svg
                        width={34}
                        height={28}
                        viewBox="0 0 34 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_dd)">
                          <path
                            d="M17 19L28.2583 3.25H5.74167L17 19Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_dd"
                            x="0.741699"
                            y="0.25"
                            width="32.5167"
                            height="27.75"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feMorphology
                              radius={1}
                              operator="erode"
                              in="SourceAlpha"
                              result="effect1_dropShadow"
                            />
                            <feOffset dy={4} />
                            <feGaussianBlur stdDeviation={3} />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy={2} />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_dropShadow"
                              result="effect2_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

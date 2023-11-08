import React, { useState } from "react";
import NewsLetterImg from "../../assets/seminars.jpg"
export default function Index() {
  return (
    <div>
      <div className="grid px-4 py-8 mx-auto md:py-12 place-content-center md:px-0 max-w-7xl">
        <div
          className="justify-start lg:flex lg:gap-28"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className>
            <h1 className="text-5xl font-bold ">Newsletter</h1>
            <p className="pt-8 md:pt-4">
              Sign up for our newsletter and get weekly updates. We only send
              emails about our latest products on the market once a week every
              Friday.
            </p>
            <div className="justify-start mt-8 md:flex md:gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="grid w-full p-4 placeholder-gray-600 border rounded-md md:w-1/2 place-items-center focus:outline-none"
              />
              <button className="grid w-full px-8 py-4 mt-4 font-semibold text-white border rounded-md bg-primary md:w-auto hover:bg-indigo-700 place-items-center md:mt-0 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Subscribe
              </button>
            </div>
            <p className="pt-4 text-xs text-primary">
              Read our{" "}
              <u className="underline cursor-pointer">privacy policy</u>
            </p>
          </div>
          <div className="pt-8 lg:pt-0">
            <img
              src={NewsLetterImg}
              alt="man in black suit holding brown paper"
              className="hidden rounded lg:block"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

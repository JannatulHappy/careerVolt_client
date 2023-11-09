import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";

const Testimonials = () => {
  const { user } = useContext(AuthContext);
  const goTo = useNavigate();
  const mutation = useMutation({
    mutationFn: (testimonial) => {
     
      return axios.post(` ${API_BASE_URL}/user/addTestimonial`, testimonial);
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;

    const form = new FormData(e.currentTarget);
    const userName = form.get("userName");
    const testimonial_poster_email = user.email;
    const photo = user.photoURL;
    const profession = form.get("profession");
    const Description = form.get("Description");

    const testimonial = {
      userName,
      testimonial_poster_email,
      photo,
      profession,
      Description,
    };
    console.log(testimonial);
    mutation.mutate(testimonial);
  };

  mutation.isError
    ? Swal.fire({
        icon: "error",
        title: "Failed to add the Testimonial.",
      })
    : null;

  mutation.isSuccess
    ? Swal.fire(
        "Testimonial Added Successfully!",
        "See in Home Page!",

        "success"
      )
    : null;
  mutation.isSuccess && goTo("/", { replace: true });
  const websiteName = "Career Volt";

  return (
    <div className="bg-white ">
      <Helmet>
        <title>{`${websiteName} | Add Job`}</title>
      </Helmet>

      <div>
        <div className="w-full  bg-[url('https://i.ibb.co/Qj3RGbV/financial-firms-esg-meeting-event-summit-data.jpg')] bg-cover  bg-no-repeat bg-center ">
          {" "}
          <div className="flex items-center justify-start w-full h-[300px] bg-blue-900/30 backdrop-brightness-75  text-left ">
            <div className="px-5 mx-auto max-w-7xl">
              <div className="w-full h-full text-left">
                <h4 className="text-lg font-semibold text-left text-white "></h4>
                <h1 className="pl-8 mt-5 text-3xl font-bold tracking-wide text-left text-white border-l-8 border-white lg:text-7xl md:text-5xl ">
                  Add Testimonial
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 mx-auto my-20 bg-gray-100 rounded-lg max-w-7xl">
          <form onSubmit={onSubmit} className="px-5 my-10 space-y-3 text-black">
            <h2 className="text-3xl pb-7">General Information</h2>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base ">Name</span>
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                
                  defaultValue={user.displayName}
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Enter Job Title"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  id="testimonial_poster_email"
                  name="testimonial_poster_email"
                  required
                  readOnly
                  value={user.email}
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base ">Profession</span>
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Your Profession"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  required
                  readOnly
                  value={user.photoURL}
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>

            <div className="mt-3">
              <label for="message" className="block my-2 ">
                Description
              </label>
              <textarea
                id="Description"
                name="Description"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Please Write Your Experience here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary"
            >
              ADD TESTIMONIAL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

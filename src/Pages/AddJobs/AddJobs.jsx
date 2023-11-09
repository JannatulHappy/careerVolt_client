import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";

import axios from "axios";
import { lightFormat } from "date-fns";
import { API_BASE_URL } from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddJobs = () => {
  const [dateError, setDateError] = useState("");

  const { user } = useContext(AuthContext);
  const goTo = useNavigate();
  const mutation = useMutation({
    mutationFn: (job) => {
      console.log(job);
      return axios.post(
        ` ${API_BASE_URL}/employer/addJob`,
        job
      );
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;

    const form = new FormData(e.currentTarget);
    const Job_title = form.get("Job_title");
    const Job_poster_email = user.email;
    const Location = form.get("Location");
    const Employment_type = form.get("Employment_type");
    const Posted_by = user.displayName;
    const Experience_level = form.get("Experience_level");
    const Date_posted = new Date();
    const Deadline = form.get("Deadline");
    const Category = form.get("Category");

    const Short_description = form.get("Short_description");
    const Benefits = form.get("Benefits");
    const Description = form.get("Description");
    const Requirements = form.get("Requirements");
    const Company = form.get("Company");
    const Website = form.get("Website");
    const Contact_email = form.get("Contact_email");
    const img = form.get("img");
    const minPrice = form.get("minPrice");
    const maxPrice = form.get("maxPrice");

    const result = lightFormat(new Date(Deadline), "yyyy-MM-dd");
    // Get the current date
    const currentDate = new Date();
    const result2 = lightFormat(new Date(currentDate), "yyyy-MM-dd");
    // Compare the input date with the current date

    if (result < result2) {
      setDateError("The input date is in the past. Enter a Valid Date");
      return;
    } else {
      setDateError("");
    }
    const job = {
      Job_title,
      Deadline: result,

      Short_description,
      Category,
      Description,
      Location,
      img,
      minPrice,
      maxPrice,
      Company,
      Requirements,
      Experience_level,
      Employment_type,
      Benefits,
      Contact_email,
      Posted_by,
      Job_poster_email,
      Date_posted,
      Website,
    };
    console.log(job);
    mutation.mutate(job);
  };

  mutation.isError
    ? Swal.fire({
        icon: "error",
        title: "Failed to add the Job.",
      })
    : null;

  mutation.isSuccess
    ? Swal.fire(
        "Job Added Successfully!",
        "See Your Posted Job!",

        "success"
      )
    : null;
  //  swal
  //    .fire({
  //      title: "Are you sure?",
  //      text: "You won't be able to revert this!",
  //      icon: "warning",
  //      showCancelButton: true,
  //      confirmButtonColor: "#3085d6",
  //      cancelButtonColor: "#d33",
  //      confirmButtonText: "Yes, delete it!",

  //      cancelButtonText: "Cancel",
  //    })
  //    .then((result) => {
  //      if (result.isConfirmed) {
  //        deletePostMutation.mutate(id);
  //      }
  //    });
  mutation.isSuccess && goTo("/employer/myPostedJobs", { replace: true });
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
                <h4 className="text-lg font-semibold text-left text-white ">
                  Find Your Candidate
                </h4>
                <h1 className="pl-8 mt-5 text-3xl font-bold tracking-wide text-left text-white border-l-8 border-white lg:text-7xl md:text-5xl ">
                  Post A Job
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
                  <span className="text-base ">Job Title</span>
                </label>
                <input
                  type="text"
                  id="Job_title"
                  name="Job_title"
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Enter Job Title"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  id="Job_poster_email"
                  name="Job_poster_email"
                  required
                  readOnly
                  value={user.email}
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2 ">
                <label className="label">
                  <span className="text-base label-text">Job Type</span>
                </label>

                <select
                  required
                  name="Employment_type"
                  id="Employment_type"
                  className="block w-full px-4 py-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled selected>
                    Select Job Type
                  </option>
                  <option className="py-2" value="Full-Time">
                    Full-Time
                  </option>
                  <option className="py-2" value="Part-Time">
                    Part-Time
                  </option>
                  <option className="py-2" value="Remote">
                    Remote
                  </option>
                  <option className="py-2" value="Freelance">
                    Freelance
                  </option>
                </select>

                {/* <input
                  type="text"
                  id="Employment_type"
                  name="Employment_type"
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Select Job Type"
                /> */}
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Location</span>
                </label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  required
                  placeholder="e.g. 'New York'"
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Experience Level</span>
                </label>

                <select
                  name="Experience_level"
                  id="Experience_level"
                  className="block w-full px-4 py-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled selected>
                    Select Experience Level
                  </option>
                  <option className="py-2" value="Senior">
                    Senior
                  </option>

                  <option className="py-2" value="Mid-Level">
                    Mid-Level
                  </option>
                  <option className="py-2" value="Entry-Level">
                    Entry-Level
                  </option>
                </select>
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  id="Deadline"
                  name="Deadline"
                  className="w-full px-3 py-4 border rounded-md"
                  required
                  placeholder="Enter Deadline"
                />
                {dateError && <p className="text-red-700">{dateError}</p>}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Category</span>
                </label>

                <select
                  required
                  name="Category"
                  id="Category"
                  className="block w-full px-4 py-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  <option className="py-2" value="Web Development">
                    Web Development
                  </option>
                  <option className="py-2" value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option className="py-2" value="Graphics Design">
                    Graphics Design
                  </option>
                  
                </select>
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Salary range</span>
                </label>

                <div className="flex gap-2">
                  <div className="w-full md:w-1/2">
                    <input
                      type="number"
                      id="minPrice"
                      name="minPrice"
                      required
                      placeholder="Min Salary"
                      className="w-full px-3 py-4 border rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="number"
                      id="maxPrice"
                      name="maxPrice"
                      required
                      placeholder="Max Salary"
                      className="w-full px-3 py-4 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full mt-2 md:w-1/2">
                <label  className="text-base ">
                  Short Description
                </label>
                <textarea
                  id="Short_description"
                  name="Short_description"
                  rows="4"
                  className="block p-2.5 w-full mt-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write Short_description"
                ></textarea>
              </div>
              <div className="w-full mt-2 md:w-1/2">
                <label  className="text-base">
                  Benefits
                </label>
                <textarea
                  id="Benefits"
                  name="Benefits"
                  rows="4"
                  className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write  Candidate Benefits here.."
                ></textarea>
              </div>
            </div>
            <div className="mt-3">
              <label  className="block my-2 ">
                Requirements
              </label>
              <textarea
                id="Requirements"
                name="Requirements"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=" Job Requirements e.g. Adobe Creative Suite, Graphic Design...."
              ></textarea>
            </div>
            <div className="mt-3">
              <label  className="block my-2 ">
                Description
              </label>
              <textarea
                id="Description"
                name="Description"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Please Provide Full Job Description here..."
              ></textarea>
            </div>
            <h2 className="py-10 text-3xl">Company Details</h2>
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base ">Company Name</span>
                </label>
                <input
                  type="text"
                  id="Company"
                  name="Company"
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Company Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Website Address</span>
                </label>
                <input
                  type="text"
                  id="Website"
                  name="Website"
                  required
                  placeholder="http://"
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 pb-8 md:flex-row">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base ">Logo</span>
                </label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  required
                  className="w-full px-3 py-4 border rounded-md"
                  placeholder="Enter Logo URL"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="text-base label-text">Contact_email</span>
                </label>
                <input
                  type="email"
                  id="Contact_email"
                  name="Contact_email"
                  required
                  placeholder="Enter Contact Email "
                  className="w-full px-3 py-4 border rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary"
            >
              ADD JOB
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;

// import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleJob } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
// import {  lightFormat} from "date-fns";
// import { AuthContext } from "../../providers/AuthProvider";
import PlaceBidForm from "./PlaceBidForm";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const JobsDetails = () => {
  // const { user } = useContext(AuthContext);
  const params = useParams();
  // const singleJob = useLoaderData()
  // console.log("sin" ,singleJob)
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["singleJob", params.id],
    queryFn: () => fetchSingleJob(params.id),
  });
  if (isLoading) {
    return (
      <span className="text-white">
        <progress className="w-56 progress"></progress>
      </span>
    );
  }

  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }
  const websiteName = "Career Volt";

  return (
    <div className="mb-10 bg-white">
      <Helmet>
        <title>{`${websiteName} | Job Details`}</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center h-[300px]  ">
        <div className="w-full h-[300px] bg-[url('https://i.ibb.co/Qj3RGbV/financial-firms-esg-meeting-event-summit-data.jpg')] bg-cover  bg-no-repeat bg-center ">
          <div className="flex items-center justify-start w-full h-[300px] bg-blue-900/30 backdrop-brightness-75  text-left ">
            <div className="px-5 mx-auto max-w-7xl">
              <div className="w-full h-full ">
                <h4 className="text-lg font-semibold text-left text-white ">
                  {data.Company}
                </h4>
                <h1 className="pl-8 mt-5 text-3xl font-bold tracking-wide text-left text-white border-l-8 border-white lg:text-7xl md:text-5xl ">
                  {data.Job_title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 mt-16 lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div className="container p-4 mx-auto">
              <div className="flex flex-col p-4 border rounded-lg shadow-lg md:flex-row">
                <div className="">
                  <div className="flex items-center gap-4 py-4">
                    <img
                      src={data.img}
                      alt="Company Logo"
                      className="rounded-lg w-14 h-14"
                    />{" "}
                    <h1 className="mb-4 text-3xl font-bold">
                      {data.Job_title}
                    </h1>
                  </div>

                  <p className="mb-4 text-lg">
                    <span className="font-bold">Company:</span> {data.Company}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Location:</span> {data.Location}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Category:</span> {data.Category}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Deadline:</span> {data.Deadline}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Employment Type:</span>{" "}
                    {data.Employment_type}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Posted by:</span>{" "}
                    {data.Job_poster_email}
                  </p>
                  <p className="mb-4 text-lg">
                    <span className="font-bold">Date Posted:</span>{" "}
                    {data.Date_posted}
                  </p>
                  <a
                    href={data.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Job Description</h2>
                <p className="mt-4 text-lg">{data.Description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Requirements</h2>
                <p className="mt-4 text-lg">{data.Requirements}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Benefits</h2>
                <p className="mt-4 text-lg">{data.Benefits}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-4 text-lg">
                  Email:{" "}
                  <a href={`mailto:${data.Contact_email}`}>
                    {data.Contact_email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-5 py-10 mx-auto mt-16 bg-gray-100 rounded-lg sm:w-8/12 lg:w-4/12">
            <h1 className="mt-4 text-xl font-semibold text-center text-primary ">
              Place Your Bid in {data.Company}
              {/* Contact {data.Company} */}
            </h1>

            <PlaceBidForm data={data}></PlaceBidForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;

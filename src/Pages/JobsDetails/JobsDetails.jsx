import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL, fetchSingleJob } from "../../api/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { formatDistanceStrict, lightFormat, parseISO } from "date-fns";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const JobsDetails = () => {
  const { user } = useContext(AuthContext);
  const params = useParams();
  const [dateError, setDateError] = useState("");
  // const singleJob = useLoaderData()
  // console.log("sin" ,singleJob)
  // const singleJob =fetchSingleJob(params.id)
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["singleJob", params.id],
    queryFn: () => fetchSingleJob(params.id),
  });
  if (isLoading) {
    return <span className="text-white">Loading...</span>;
  }

  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }

  //   console.log(data, "data");
  //   const baseDate = new Date();
  const handleBid = (e) => {
    e.preventDefault();
    // const form = e.target;
  
 const form = new FormData(e.currentTarget);
    const Price_range = form.get("Price_range");
    const candidate_Deadline = form.get("candidate_Deadline");
    const Candidate_email = form.get("Candidate_email");
    const Job_Owner_email = data.Job_poster_email;
    const companyName = data.Company;
    const companyLocation = data.Location;
    const status = "Pending";
    const jobTitle = data.Job_title;
    const result = lightFormat(new Date(candidate_Deadline), "yyyy-MM-dd");
    // Get the current date
    const currentDate = new Date();
    const result2 = lightFormat(new Date(currentDate), "yyyy-MM-dd");
    // Compare the input date with the current date
    console.log(result, "re", result2);
    if (result < result2) {
        setDateError("The input date is in the past. Enter a Valid Date");
        return
    } else {
      setDateError("");
    }
    const placeBid = {
      jobTitle,
      companyName,
      companyLocation,
      Price_range,
      candidate_Deadline: result,
      Candidate_email,
      Job_Owner_email,
      status,
    };
    console.log(placeBid);
    
  };
  return (
    <div className="bg-white ">
      <div className="flex flex-col items-center justify-center h-[300px] ">
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
        {data.Job_poster_email}
        <div className="flex flex-col items-start gap-6 mt-16 lg:flex-row">
          <table className="w-full text-left text-gray-500 xl:w-8/12">
            <tbody className="p">
              <tr className="text-left bg-white ">
                <td className="py-5 pl-3">
                  <img src={data.img} alt="" className="w-14" />
                </td>
                <td className="px-6 py-4">
                  <div>
                    <h3 className="text-xl font-medium text-black">
                      {data.Job_title}
                    </h3>
                    <p className="text-base font-normal">{data.Company}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-left text-black">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#5f63ff"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    <p className="text-lg">{data.Price_range} / month</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#5f63ff"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-lg font-normal text-black">
                      {data.Location}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 ">
                  <div className="text-lg text-center text-white bg-gray-400 ">
                    {data.Experience_level}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-8/12 px-6 py-5 mx-auto bg-gray-100 rounded-lg xl:w-4/12">
            <h1 className="mt-4 text-xl font-medium text-center text-primary ">
              Place Your Bid in {data.Company}
              {/* Contact {data.Company} */}
            </h1>

            <form onSubmit={handleBid} className="text-black mt-9 space-y-">
              <div className="mb-4">
                <input
                  type="number"
                  id="Price_range"
                  name="Price_range"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter Your Bidding Amount"
                />
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  id="candidate_Deadline"
                  name="candidate_Deadline"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  placeholder="Enter Your Deadline"
                />
                {dateError && <p className="text-red-700">{dateError}</p>}
              </div>

              <div className="mb-4">
                <input
                  required
                  type="email"
                  id="Candidate_email"
                  name="Candidate_email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="Job_poster_email"
                  value={user.email}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              {user?.email === data?.Job_poster_email ? (
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-medium text-white bg-gray-300 rounded-md"
                  disabled
                >
                  PLACE YOUR BID
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary"
                >
                  PLACE YOUR BID
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBidRequests } from "../../api/api";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { AuthContext } from "../../providers/AuthProvider";
import Reject from "./Reject/Reject";
import Accept from "./Accept/Accept";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["BidRequests", email],
    queryFn: () => fetchBidRequests(email),
  });

  if (isLoading) {
    return <progress className="w-2/6 mx-auto progress"></progress>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const websiteName = "Career Volt";

  return (
    <div className="px-5 mx-auto my-10 max-w-7xl">
      <Helmet>
        <title>{`${websiteName} | Bid Requests`}</title>
      </Helmet>
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-screen text-4xl font-bold">
          {" "}
          No Bid Requests !! Please Add Bid on Projects!!!
        </div>
      ) : (
        <>
          {" "}
          <h2 className="py-10 mb-10 text-3xl font-medium text-center">
            Bid Requests On your Project
          </h2>
          <div className="overflow-x-auto mb-96">
            <table className="table table-xs">
              <thead>
                <tr className="text-sm">
                  <th></th>
                  <th>Job Title</th>
                  <th> Candidate Email</th>
                  <th>Price</th>
                  <th>Deadline</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody className="">
                {data?.map((job, index) => (
                  <tr key={index}>
                    <th className="text-base">{index + 1}</th>
                    <td className="text-lg font-medium text-primary">
                      {job.Job_title}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.Candidate_email}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.Price_range}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.candidate_Deadline}
                    </td>
                    {/* <td className="text-base font-medium text-primary">
                  {job.status === "Pending"
                    ? "In Progress"
                    : job.status === "Reject"
                    ? "Rejected"
                    : null}
                </td> */}
                    <td className="mx-5 text-base font-bold text-primary">
                      {job.status}
                    </td>
                    <td>
                      {job.status === "Pending" && (
                        <div className="flex justify-between gap-5 py-2">
                          <Accept status={job.status} id={job._id}></Accept>

                          <Reject status={job.status} id={job._id}></Reject>
                        </div>
                      )}
                      {job.status === "Rejected" && (
                        <div className="">
                          <ProgressBar
                            percent={100} // Adjust the progress percentage
                            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                          >
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 40
                                    }%)`,
                                  }}
                                  width="20"
                                  src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png" // Customize with your images
                                />
                              )}
                            </Step>
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 70
                                    }%)`,
                                  }}
                                  width="20"
                                  src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508" // Customize with your images
                                />
                              )}
                            </Step>
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 100
                                    }%)`,
                                  }}
                                  src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png" // Customize with your images
                                />
                              )}
                            </Step>
                          </ProgressBar>
                        </div>
                      )}
                      {job.status === "In Progress" && (
                        <div className="">
                          <ProgressBar
                            percent={75} // Adjust the progress percentage
                            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                          >
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 40
                                    }%)`,
                                  }}
                                  width="20"
                                  src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png" // Customize with your images
                                />
                              )}
                            </Step>
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 75
                                    }%)`,
                                  }}
                                  width="20"
                                  src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508" // Customize with your images
                                />
                              )}
                            </Step>
                            <Step transition="scale">
                              {({ accomplished }) => (
                                <img
                                  style={{
                                    filter: `grayscale(${
                                      accomplished ? 0 : 80
                                    }%)`,
                                  }}
                                  src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png" // Customize with your images
                                />
                              )}
                            </Step>
                          </ProgressBar>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default BidRequests;

import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {  fetchMyBids } from "../../api/api";
import Complete from "./Complete/Complete"

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyBids = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["myBids", email],
    queryFn: () => fetchMyBids(email),
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
        <title>{`${websiteName} | My Bids`}</title>
      </Helmet>
      <h2 className="py-10 mb-10 text-3xl font-medium text-center">
        Your Bid Requests on Projects
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-sm">
              <th></th>
              <th>Job Title</th>
              <th> Your Email</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                <td className="text-base font-medium text-primary">
                  {job.status === "Pending"
                    ? "Pending"
                    : job.status === "Reject"
                    ? "Rejected"
                    : job.status === "Completed"
                    ? "Completed"
                    : "In Progress"}
                </td>
                <td>
                  {job.status === "In Progress" && (
                    <Complete status={job.status} id={job._id}></Complete>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;

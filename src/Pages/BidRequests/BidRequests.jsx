//   const handleDeleteItem = (id) => {
//     // Remove the deleted item from the data
//     const updatedData = data.filter((job) => job._id !== id);
//     // Update the data in the query cache
//     queryClient.setQueryData(["EmployerPostedJob", email], updatedData);
//   };
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { fetchBidRequests } from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";

import { Link } from "react-router-dom";
import Reject from "./Reject/Reject";

const BidRequests = () => {
  // const queryClient = useQueryClient();
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
  // const mutation = useMutation({

  //     mutationFn: (newTodo) => {
  //         console.log(newTodo);
  //      return axios.delete("/todos", newTodo);
  //    },
  //  });
  //   const deletePostMutation = useMutation({
  //     mutationFn: deleteJob,
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["EmployerPostedJob"] });
  //     },
  //   });

  // const handleDelete = (id) => {
  //   deletePostMutation.mutate(id);
  // };

  console.log(data);
  return (
    <div className="px-5 mx-auto my-10 max-w-7xl">
      <h2 className="py-10 mb-10 text-3xl font-medium text-center">
        Bid Requests On your Project
      </h2>
      <div className="overflow-x-auto">
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
                <td className="text-base font-medium text-primary">
                  {job.status === "Pending" && <p>In Progress</p>}
                  {job.status === "Reject" && <p>Rejected.</p>}
                </td>

                <td>
                  <div className="flex gap-5">
                    {job.status === "Pending" && (
                      <button className="btn btn-accent">Accept</button>
                    )}
                    {job.status === "Pending" && (
                      <Reject status={job.status} id={job._id}></Reject>
                    )}
                  </div>
                  {job.status === "Reject" && <div>Completed</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;

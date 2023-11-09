//   const handleDeleteItem = (id) => {
//     // Remove the deleted item from the data
//     const updatedData = data.filter((job) => job._id !== id);
//     // Update the data in the query cache
//     queryClient.setQueryData(["EmployerPostedJob", email], updatedData);
//   };
import {  useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import {  fetchEmployerPostedJob } from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";
import Delete from "./Delete/Delete";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyPostedJob = () => {
  // const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["EmployerPostedJob", email],
    queryFn: () => fetchEmployerPostedJob(email),
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
    const websiteName = "Career Volt";
  return (
    <div className="px-5 mx-auto my-10 max-w-7xl">
      <Helmet>
        <title>{`${websiteName} | Posted Jobs`}</title>
      </Helmet>

      <div className="overflow-x-auto ">
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-screen text-4xl font-bold">
            {" "}
           Go to Post Jobs & Add Your Jobs!!
          </div>
        ) : (
          <div className="mb-96">
            <h2 className="py-10 mb-10 text-3xl font-medium text-center">
              {user.displayName}'s Posted Job
            </h2>
            <table className="table table-xs">
              <thead>
                <tr className="text-sm">
                  <th></th>
                  <th>Job Title</th>
                  <th>Category</th>
                  <th>Experience Level</th>
                  <th>location</th>
                  <th>Salary</th>
                  <th>Deadline</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((job, index) => (
                  <tr key={index}>
                    <th className="text-base">{index + 1}</th>
                    <td className="text-lg font-medium text-primary">
                      {job.Job_title}
                    </td>
                    <td className="text-base font-medium text-primary">
                      {job.Category}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.Experience_level}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.Location}
                    </td>
                    <td className="text-base font-medium text-primary">
                      ${job.maxPrice} - ${job.minPrice}
                    </td>
                    <td className="text-sm font-medium text-primary">
                      {job.Deadline}
                    </td>
                    <th>
                      <Link
                        to={`/employer/singlePostedJobs/${job._id}`}
                        className="py-2 btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#008000"
                          class="w-10 h-10"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </th>
                    <th>
                      {/* <button
                    onClick={() => handleDelete(data._id)}
                    className="py-2 btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="	#008000"
                      class="w-7 h-7"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button> */}
                      <Delete id={job._id} data={data}></Delete>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostedJob;

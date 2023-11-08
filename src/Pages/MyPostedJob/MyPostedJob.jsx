

//   const handleDeleteItem = (id) => {
//     // Remove the deleted item from the data
//     const updatedData = data.filter((job) => job._id !== id);
//     // Update the data in the query cache
//     queryClient.setQueryData(["EmployerPostedJob", email], updatedData);
//   };
import { useQuery,  } from "@tanstack/react-query";
import React, { useContext } from "react";
import { fetchEmployerPostedJob } from "../../api/api";
import { AuthContext } from "../../providers/AuthProvider";
import Delete from "./Delete/Delete";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["EmployerPostedJob", email],
    queryFn: () => fetchEmployerPostedJob(email),
  });

  if (isLoading) {
    return <span>Loading...</span>;
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

  console.log(data);
  return (
    <div className="px-5 mx-auto my-10 max-w-7xl">
      <h2 className="py-10 mb-10 text-3xl font-medium text-center">
        {user.displayName}'s Posted Job
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
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
                <th>{index + 1}</th>
                <td>{job.Job_title}</td>
                <td>{job.Category}</td>
                <td>{job.Experience_level}</td>
                <td>{job.Location}</td>
                <td>
                  ${job.maxPrice} - ${job.minPrice}
                </td>
                <td>{job.Deadline}</td>
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
                  <Delete id={job._id} data={data}></Delete>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
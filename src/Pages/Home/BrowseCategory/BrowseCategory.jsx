import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../../api/api";
const BrowseCategory = () => {
  //localhost:5000/api/v1/user/jobs
  // const [jobsData, setJobsData] = useState([]);
  // useEffect(() => {
  //   fetch(` http://localhost:5000/api/v1/user/jobs`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJobsData(data);
  //     });
  // }, []);
  // console.log(jobsData);
  // Queries
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
  // const { data, isLoading, isError } = useQuery("jobs", fetchJobs);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError ) {
    return <div>Error fetching data</div>;
  }
  console.log("using tanstack query", data);
  return (
    <div className="text-black bg-white mt-28">
      {data.length}

      {data.map((todo) => (
        <li key={todo.id}>{todo.Category}</li>
      ))}
    </div>
  );
};

export default BrowseCategory;

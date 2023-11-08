import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePostedJob } from "../../api/api";
import { useQuery } from '@tanstack/react-query';
import UpdateForm from "./UpdateForm/UpdateForm"
const UpdateJobs = () => {
  // const { user } = useContext(AuthContext);
  const params = useParams();
  // const singleJob = useLoaderData()
  // console.log("sin" ,singleJob)
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["singlePostedJob", params.id],
    queryFn: () => fetchSinglePostedJob(params.id),
  });
  if (isLoading) {
    return <span className="text-white">Loading...</span>;
  }

  if (isError) {
      return <span className="text-white">Error: {error.message}</span>;
      
    }
    console.log(data, params.id);
    return <div className="text-black">

        <UpdateForm id={data._id} data={data}></UpdateForm>
    </div>;
};

export default UpdateJobs;
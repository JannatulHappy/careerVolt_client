import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { fetchSingleJob } from '../../api/api';
import { useQuery } from '@tanstack/react-query';

const JobsDetails = () => {
    const params = useParams()
    // const singleJob = useLoaderData()
    // console.log("sin" ,singleJob)
    // const singleJob =fetchSingleJob(params.id)
    const { isLoading, isError, data, error } = useQuery({
      queryKey: ["singleJob",params.id],
      queryFn: () => fetchSingleJob(params.id),
    });
      if (isLoading) {
        return <span className='text-white'>Loading...</span>;
      }

      if (isError) {
        return <span className='text-white'>Error: {error.message}</span>;
      }
console.log(data,"data")
    return (
        <div className='text-white'>
            jobs details {params.id}
        </div>
    );
};

export default JobsDetails;
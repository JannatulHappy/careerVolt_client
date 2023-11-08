// api.js
import axios from "axios";

export const API_BASE_URL = "http://localhost:5000/api/v1";

export const fetchJobs = async () => {
  const response = await axios.get(`${API_BASE_URL}/user/jobs`);
  return response.data;
};
export const fetchSingleJob = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/user/jobs/${id}`);
  return response.data;
};
export const fetchSinglePostedJob = async (id) => {
  const response = await axios.get(
    `${API_BASE_URL}/employer/singlePostedJobs/${id}`
  );
  return response.data;
};
export const fetchEmployerPostedJob = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/employer/postedJobs/${email}`
  );
  return response.data;
};
// bid request from the posted job of logged user
export const fetchBidRequests = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/employer/bidRequests/${email}`
  );
  return response.data;
};
// get all the bids which logged user has requested
export const fetchMyBids = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/candidate/myBids/${email}`
  );
  return response.data;
};
export const deleteEmployerPostedJob = async (id) => {
  // Perform the data deletion here, for example, make an API request to delete the data.
  // Replace this with your actual data deletion logic.
  const response = await fetch(`${API_BASE_URL}/employer/delete/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete data");
  }

  // Return any data you want from the mutation
  return id;
};
export async function deleteJob(id) {
  const response = await fetch(`${API_BASE_URL}/employer/delete/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
// const deletePostMutation = useMutation({
  //   mutationFn: () => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You want Delete?",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Delete",
  //       cancelButtonText: "Cancel",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         deleteJob;
  //       }
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["EmployerPostedJob"] });
  //   },
  // }); // const handleDelete = (id) => {
  //   deletePostMutation.mutate(id);
  // };
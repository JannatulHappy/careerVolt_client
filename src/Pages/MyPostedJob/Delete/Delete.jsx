import React from "react";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../api/api";
import axios from "axios";

const Delete = ({ id, data}) => {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want Delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(newTodo);
          return axios.delete(`${API_BASE_URL}/employer/delete/${id}`, newTodo); // Trigger the delete mutation
        }
      });
    },
    onSuccess: (data) => {
      // Remove the deleted item from the data
      const updatedData = data.filter((job) => job._id !== id);
      // Update the data in the query cache
      QueryClient.setQueryData(["EmployerPostedJob", email], updatedData);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate(id);
        }}
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
      </button>

      {mutation.isLoading && <p>Deleting...</p>}
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {/* Additional success feedback can be added here, if needed */}
    </div>
  );
};

export default Delete;

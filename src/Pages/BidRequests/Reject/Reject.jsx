import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { API_BASE_URL } from "../../../api/api";
import axios from "axios";

const Reject = ({ id }) => {
    const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      console.log(newTodo, id);
      return axios.put(
        `${API_BASE_URL}/employer/bidRequests/update/${id}`,
        newTodo
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["BidRequests"] });
    },
  });
  return (
    <div>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

        </>
      )}

      <button
        onClick={() => {
          mutation.mutate({ status: "Reject" });
        }}
        className="btn btn-secondary"
      >
        Reject
      </button>
    </div>
  );
};

export default Reject;

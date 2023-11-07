import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { lightFormat } from "date-fns";
import { API_BASE_URL } from "../../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlaceBidForm = ({ data }) => {
  const { user } = useContext(AuthContext);
const [overDeadline,setOverDeadline]=useState("")
  const [dateError, setDateError] = useState("");
  const goTo = useNavigate();
  const mutation = useMutation({
    mutationFn: (placeBid) => {
      console.log(placeBid);
      return axios.post(` ${API_BASE_URL}/candidate/bids`, placeBid);
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;

    const form = new FormData(e.currentTarget);
    const Price_range = form.get("Price_range");
    const candidate_Deadline = form.get("candidate_Deadline");
    const Candidate_email = form.get("Candidate_email");
    const Job_Owner_email = data.Job_poster_email;
    const companyName = data.Company;
    const companyLocation = data.Location;
    const status = "Pending";
    const jobTitle = data.Job_title;
    const jobPostedDate = data.Date_posted;
    const result = lightFormat(new Date(candidate_Deadline), "yyyy-MM-dd");
    // Get the current date
    const currentDate = new Date();
    const result2 = lightFormat(new Date(currentDate), "yyyy-MM-dd");
      // Compare the input date with the current date
      const jobDeadline = lightFormat(new Date(data.Deadline), "yyyy-MM-dd");
       if (jobDeadline < result2) {
         setOverDeadline("disable")
       return
       } else {
           setOverDeadline("")
       }
    console.log(jobDeadline, "re", result2, overDeadline);
    if (result < result2) {
      setDateError("The input date is in the past. Enter a Valid Date");
      return;
    } else {
      setDateError("");
    }
    const placeBid = {
      jobTitle,
      jobPostedDate,
      companyName,
      companyLocation,
      Price_range,
      candidate_Deadline: result,
      Candidate_email,
      Job_Owner_email,
      status,
    };
    console.log(placeBid);
    mutation.mutate(placeBid);
  };
  
  mutation.isError
    ? Swal.fire({
        icon: "error",
        title: "Failed to add the product.",
      text: error,
           
      })
    : null;

  mutation.isSuccess
    ? Swal.fire(
        "bid Added Successfully!",
        "See Your Requested Bid!",

      "success"
          
    )
    
    : null;
  mutation.isSuccess && goTo("/candidate/myBids",{ replace: true });
  return (
    <form onSubmit={onSubmit} className="text-black mt-9 space-y-">
      <div className="mb-4">
        <input
          type="number"
          id="Price_range"
          name="Price_range"
          required
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter Your Bidding Amount"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          id="candidate_Deadline"
          name="candidate_Deadline"
          className="w-full px-3 py-2 border rounded-md"
          required
          placeholder="Enter Your Deadline"
        />
      </div>
     
      {dateError && <p className="text-red-700">{dateError}</p>}

      <div className="mb-4">
        <input
          required
          type="email"
          id="Candidate_email"
          name="Candidate_email"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          id="email"
          name="Job_poster_email"
          value={user?.email}
          readOnly
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      {overDeadline && (
        <p className="text-base font-medium text-red-700">
          Deadline is Over for Apply! Try in Another Job
        </p>
      )}
      {user?.email === data?.Job_poster_email ? (
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-medium text-white bg-gray-300 rounded-md"
          disabled
        >
          PLACE YOUR BID
        </button>
      ) : overDeadline ? (
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-medium text-white bg-gray-300 rounded-md"
          disabled
        >
          PLACE YOUR BID
        </button>
      ) : (
        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-medium text-white rounded-md bg-primary"
        >
          PLACE YOUR BID
        </button>
      )}
    </form>
  );
};

export default PlaceBidForm;

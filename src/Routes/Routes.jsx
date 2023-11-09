import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import JobsDetails from "../Pages/JobsDetails/JobsDetails";
import MyBids from "../Pages/MyBids/MyBids";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import UpdateJobs from "../Pages/UpdateJobs/UpdateJobs";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Testimonials from "../Pages/Testimonials/Testimonials";
import JobListing from "../Pages/JobListing/JobListing";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/singleJob/:id",
        element: (
          <PrivateRoute>
            <JobsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/addJob",
        element: (
          <PrivateRoute>
            {" "}
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/candidate/myBids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "/employer/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/employer/myBidRequests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
      },
      {
        path: "/employer/singlePostedJobs/:id",
        element: (
          <PrivateRoute>
            <UpdateJobs></UpdateJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/testimonials",
        element: (
          <PrivateRoute>
            <Testimonials></Testimonials>
          </PrivateRoute>
        ),
      },

      {
        path: "/candidate/jobListing",
        element: <JobListing></JobListing>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

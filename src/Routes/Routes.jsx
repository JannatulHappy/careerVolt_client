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
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/api/v1/user/singleJob/${params.id}`),
      },
      {
        path: "/user/addJob",
        element: <AddJobs />,
      },
      {
        path: "/candidate/myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/employer/myPostedJobs",
        element: <MyPostedJob></MyPostedJob>,
      },
      {
        path: "/employer/singlePostedJobs/:id",
        element: <UpdateJobs></UpdateJobs>,
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

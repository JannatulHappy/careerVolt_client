

import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from "react-helmet-async";
// import { updateProfile } from "firebase/auth";

function Login() {
  const { signIn, user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log("login");
        Swal.fire("Good job!", "Login Successfully!", "success");
        // // navigate after login
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };
  console.log(user, "user");
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
    const websiteName = "Career Volt";
  return (
    <div className="px-5 py-10">
      <Helmet>
        {" "}
        <title>{websiteName} | Login</title>
      </Helmet>
      <div className="py-5 text-center">
        <h1 className="text-4xl font-bold">Please Login</h1>
      </div>

      <div className="flex-shrink-0 w-full p-6 mx-auto text-white shadow-2xl xl:w-1/3 md:w-3/4 card bg-base-100">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="text-black input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="text-black input input-bordered"
              required
            />
          </div>
          <div className="mt-6 form-control">
            <button className="py-3 text-lg font-bold text-white bg-secondary ">
              Login
            </button>
          </div>
        </form>
        <button
          className="py-3 text-lg font-bold text-white rounded bg-secondary"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button>
        <p className="my-5 font-semibold text-center text-secondary">
          Don't have an account?
          <Link
            to="/register"
            className="underline text-secondary hover:underline"
          >
            {" "}
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


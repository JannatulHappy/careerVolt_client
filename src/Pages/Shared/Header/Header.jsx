import React, { useContext } from "react";
import logo from "../../../assets/logo-inverse.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  const li = (
    <>
      <li className="px-2">
        <NavLink to="/" className="hover:text-primary">
          {" "}
          HOME
        </NavLink>
        {/* <NavNavLink>Home</NavNavLink> */}
      </li>
      <li className="z-10 dropdown dropdown-end">
        <label tabIndex={0} className="">
          <div className="flex gap-1 text-white hover:text-primary">
            FOR CANDIDATES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu-sm  mt-3 z-[1] shadow  bg-white rounded-box p-2 text-black dropdown-content "
        >
          <li>
            <NavLink to="/candidate/jobListing">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              JOB LISTING
            </NavLink>
          </li>
          <li>
            <NavLink to="/candidate/myBids">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              My Bids
            </NavLink>
          </li>
        </ul>
      </li>

      {/* <li className="z-30">
        <details>
          <summary tabIndex={-0} className="hover:text-primary dropdo">
            FOR candidates
          </summary>
          <ul tabIndex={1} className="p-2 text-black">
            <li>
              <NavLink to="/candidate/jobListing">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                JOB LISTING
              </NavLink>
            </li>
            <li>
              <NavLink to="/candidate/myBids">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                My Bids
              </NavLink>
            </li>
          </ul>
        </details>
      </li> */}
      <li className="z-10 dropdown dropdown-end">
        <label tabIndex={0} className="">
          <div className="flex gap-1 text-white border-gray-700 hover:text-primary">
            FOR EMPLOYERS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu-sm  mt-3 z-[1] shadow  bg-white rounded-box p-2 text-black dropdown-content "
        >
          <li className="text-xs w-52">
            <NavLink to="/user/addJob">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Post Job
            </NavLink>
          </li>
          <li>
            <NavLink to="/employer/myPostedJobs">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Posted Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/employer/myBidRequests">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Bid Requests
            </NavLink>
          </li>
        </ul>
      </li>

      {/* <li className="z-20">
        <details className="dropdown">
          <summary tabIndex={1} className="hover:text-primary">
            FOR employers
          </summary>
          <ul tabIndex={1} className="p-2 text-black">
            <li className="text-xs w-52">
              <NavLink to="/user/addJob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Post Job
              </NavLink>
            </li>
            <li>
              <NavLink to="/employer/myPostedJobs">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Posted Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/employer/myBidRequests">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Bid Requests
              </NavLink>
            </li>
          </ul>
        </details>
      </li> */}

      <li className="z-10 dropdown dropdown-end">
        <label tabIndex={0} className="">
          <div className="flex gap-1 text-white hover:text-primary">
            TESTIMONIAL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu-sm  mt-3 z-[1] shadow  bg-white rounded-box p-2 text-black dropdown-content "
        >
          <li className="text-xs w-52">
            <NavLink to="/user/testimonials">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              ADD TESTIMONIAL
            </NavLink>
          </li>
        </ul>
      </li>
      {/* <li className="z-10" tabIndex={0}>
        <details className="dropdown" tabIndex={0}>
          <summary className="hover:text-primary">TESTIMONIAL</summary>
          <ul tabIndex={0} className="p-2 text-black dropdown-content menu">
            <li className="text-xs w-52">
              <NavLink to="/user/testimonials">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                ADD TESTIMONIAL
              </NavLink>
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );


   const li2 = (
     <>
       <li className="">
         <NavLink to="/" className="hover:text-primary">
           {" "}
           HOME
         </NavLink>
         {/* <NavNavLink>Home</NavNavLink> */}
       </li>
       {/* <li className="z-10 dropdown dropdown-end">
         <label tabIndex={0} className="">
           <div className="flex gap-1 text-white hover:text-primary">
             FOR CANDIDATES
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-5 h-5 font-bold"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
               />
             </svg>
           </div>
         </label>
         <ul
           tabIndex={0}
           className="menu-sm  mt-3 z-[1] shadow  bg-white rounded-box p-2 text-black dropdown-content "
         >
           <li>
             <NavLink to="/candidate/jobListing">
               {" "}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 className="w-6 h-6 text-secondary"
               >
                 <path
                   fillRule="evenodd"
                   d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                   clipRule="evenodd"
                 />
               </svg>
               JOB LISTING
             </NavLink>
           </li>
           <li>
             <NavLink to="/candidate/myBids">
               {" "}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 className="w-6 h-6 text-secondary"
               >
                 <path
                   fillRule="evenodd"
                   d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                   clipRule="evenodd"
                 />
               </svg>
               My Bids
             </NavLink>
           </li>
         </ul>
       </li> */}

       <li className="z-30">
         <details>
           <summary tabIndex={-0} className="hover:text-primary ">
             FOR candidates
           </summary>
           <ul tabIndex={1} className="p-2 text-black">
             <li>
               <NavLink to="/candidate/jobListing">
                 {" "}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-6 h-6 text-secondary"
                 >
                   <path
                     fillRule="evenodd"
                     d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                     clipRule="evenodd"
                   />
                 </svg>
                 JOB LISTING
               </NavLink>
             </li>
             <li>
               <NavLink to="/candidate/myBids">
                 {" "}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-6 h-6 text-secondary"
                 >
                   <path
                     fillRule="evenodd"
                     d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                     clipRule="evenodd"
                   />
                 </svg>
                 My Bids
               </NavLink>
             </li>
           </ul>
         </details>
       </li>
       {/* <li className="z-10 dropdown dropdown-end">
         <label tabIndex={0} className="">
           <div className="flex gap-1 text-white border-gray-700 hover:text-primary">
             FOR EMPLOYERS
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-5 h-5 font-bold"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
               />
             </svg>
           </div>
         </label>
         <ul
           tabIndex={0}
           className="menu-sm  mt-3 z-[1] shadow  bg-white rounded-box p-2 text-black dropdown-content "
         >
           <li className="text-xs w-52">
             <NavLink to="/user/addJob">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 className="w-6 h-6 text-secondary"
               >
                 <path
                   fillRule="evenodd"
                   d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                   clipRule="evenodd"
                 />
               </svg>
               Post Job
             </NavLink>
           </li>
           <li>
             <NavLink to="/employer/myPostedJobs">
               {" "}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 className="w-6 h-6 text-secondary"
               >
                 <path
                   fillRule="evenodd"
                   d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                   clipRule="evenodd"
                 />
               </svg>
               Posted Jobs
             </NavLink>
           </li>
           <li>
             <NavLink to="/employer/myBidRequests">
               {" "}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 className="w-6 h-6 text-secondary"
               >
                 <path
                   fillRule="evenodd"
                   d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                   clipRule="evenodd"
                 />
               </svg>
               Bid Requests
             </NavLink>
           </li>
         </ul>
       </li> */}

       <li className="z-20">
         <details >
           <summary tabIndex={1} className="hover:text-primary">
             FOR employers
           </summary>
           <ul tabIndex={1} className="p-2 text-black">
             <li className="text-xs ">
               <NavLink to="/user/addJob">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-6 h-6 text-secondary"
                 >
                   <path
                     fillRule="evenodd"
                     d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                     clipRule="evenodd"
                   />
                 </svg>
                 Post Job
               </NavLink>
             </li>
             <li>
               <NavLink to="/employer/myPostedJobs">
                 {" "}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-6 h-6 text-secondary"
                 >
                   <path
                     fillRule="evenodd"
                     d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                     clipRule="evenodd"
                   />
                 </svg>
                 Posted Jobs
               </NavLink>
             </li>
             <li>
               <NavLink to="/employer/myBidRequests">
                 {" "}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-6 h-6 text-secondary"
                 >
                   <path
                     fillRule="evenodd"
                     d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                     clipRule="evenodd"
                   />
                 </svg>
                 Bid Requests
               </NavLink>
             </li>
           </ul>
         </details>
       </li>

       <li className="z-10 pb-16 bg-white " tabIndex={0}>
        <details tabIndex={0}>
          <summary className="bg-white hover:text-primary">TESTIMONIAL</summary>
          <ul tabIndex={0} className="text-sm text-black bg-white rounded dropdown-content menu">
            <li className="">
              <NavLink to="/user/testimonials">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                ADD TESTIMONIAL
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
       {/* <li className="z-10" tabIndex={0}>
        <details className="dropdown" tabIndex={0}>
          <summary className="hover:text-primary">TESTIMONIAL</summary>
          <ul tabIndex={0} className="p-2 text-black dropdown-content menu">
            <li className="text-xs w-52">
              <NavLink to="/user/testimonials">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                ADD TESTIMONIAL
              </NavLink>
            </li>
          </ul>
        </details>
      </li> */}
     </>
   );
  return (
    <div className="py-3 border-b shadow-xl bg-secondary">
      <div className="px-5 mx-auto text-white navbar max-w-7xl">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-black"
            >
              {li2}
              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <ul
                    tabIndex={1}
                    className="menu menu-sm text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow  rounded-box "
                  >
                    <li>
                      <button onClick={handleSignOut}>
                        <NavLink className="text-primary bg-secondary border-2 border-blue-700  inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 mb-2  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                            />
                          </svg>
                          LOGOUT
                        </NavLink>
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    type="button"
                    className="text-white hover:text-primary  border-2 border-blue-700  inline-flex items-center font-medium bg-secondary rounded-lg text-sm px-5 py-2.5 text-center mx-3 mb-2  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                    SIGN UP
                  </NavLink>{" "}
                  <NavLink
                    to="/login"
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 mb-2 ml-2 text-sm font-medium text-center text-white border border-blue-700 rounded-lg hover:text-primary bg-primary hover:bg-transparent "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    LOGIN
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <div>
            <Link to="/">
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex-none hidden pl-10 lg:flex">
          <ul className="px-5 uppercase menu menu-horizontal">{li}</ul>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="border-4 border-white rounded-full w-9">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow  rounded-box "
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <a>{user?.DisplayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>
                    <NavLink className="text-primary bg-secondary border-2 border-blue-700  inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 mb-2  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      LOGOUT
                    </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink
                to="/register"
                type="button"
                className="text-white hover:text-primary  border-2 border-blue-700  inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 mb-2  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                SIGN UP
              </NavLink>{" "}
              <NavLink
                to="/login"
                type="button"
                className="inline-flex items-center px-5 py-2.5 mb-2 ml-2 text-sm font-medium text-center text-white border border-blue-700 rounded-lg hover:text-primary bg-primary hover:bg-transparent "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                LOGIN
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

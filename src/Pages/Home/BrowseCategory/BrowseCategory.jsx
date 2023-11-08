import React, { useState, useEffect } from "react";
import { formatDistanceStrict, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../../api/api";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const BrowseCategory = () => {
  const [webCategories, setWebCategories] = useState([]);
  const [digitalCategories, setDigitalCategories] = useState([]);
  const [graphicCategories, setGraphicCategories] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    data: jobsData,
    isLoading: jobsLoading,
    isError: jobsError,
  } = useQuery({ queryKey: ["categories"], queryFn: fetchJobs });

  useEffect(() => {
    if (jobsLoading) {
      setIsLoading(true);
      setIsError(false);
      return;
    }

    if (jobsError) {
      setIsLoading(false);
      setIsError(true);
      return;
    }

    setData(jobsData);

    const webCategoriesFilter = jobsData.filter(
      (category) => category.Category.toLowerCase() === "web development"
    );
    const digitalCategoriesFilter = jobsData.filter(
      (category) => category.Category.toLowerCase() === "digital marketing"
    );
    const graphicCategoriesFilter = jobsData.filter(
      (category) => category.Category.toLowerCase() === "graphics design"
    );

    setWebCategories(webCategoriesFilter);
    setDigitalCategories(digitalCategoriesFilter);
    setGraphicCategories(graphicCategoriesFilter);
    setIsLoading(false);
  }, [jobsData, jobsLoading, jobsError]);
const baseDate=new Date()
  return (
    <div className="px-5 pt-16 text-black bg-white">
      <div className="px-5 mx-auto max-w-7xl">
        <motion.h1
          initial={{ x: "100w" }}
          animate={{ fontSize: "36px", textAlign: "center", x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="pb-10 "
        >
          Browse Jobs By Popular Categories
        </motion.h1>
        <Tabs className="py-10">
          <TabList className="grid grid-cols-1 gap-6 mx-auto mb-20 text-center border-none mx:-auto lg:gap-10 lg:w-9/12 md:grid-cols-3">
            <Tab className="py-4 border-2 border-gray-300 hover:border-primary">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#5f63ff"
                  className="w-16 h-16 mx-auto mb-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <h3 className="text-xl">Web Development</h3>
                <p className="pt-2 text-base text-gray-500 text ">
                  {webCategories.length} Open Positions
                </p>
              </div>
            </Tab>{" "}
            <Tab className="py-4 border-2 border-gray-300 hover:border-primary">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#5f63ff"
                  className="w-16 h-16 mx-auto mb-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </svg>

                <h3 className="text-xl">Digital Marketing</h3>
                <p className="pt-2 text-base text-gray-500 text ">
                  {digitalCategories.length} Open Positions
                </p>
              </div>
            </Tab>
            <Tab className="py-4 border-2 border-gray-300 hover:border-primary">
              <motion.div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#5f63ff"
                  className="w-16 h-16 mx-auto mb-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>

                <h3 className="text-xl">Graphics Design</h3>
                <p className="pt-2 text-base text-gray-500 text ">
                  {graphicCategories.length} Open Positions
                </p>
              </motion.div>
            </Tab>
          </TabList>

          <TabPanel>
            {isLoading && (
              <div>
                <progress className="w-56 progress"></progress>
              </div>
            )}
            {isError && <div>Error fetching data</div>}

            {webCategories?.map((web) => (
              <motion.div
                whileHover="hover"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.9, ease: "backInOut" }}
                className="relative px-4 py-4 my-6 overflow-x-auto shadow-lg sm:rounded-lg"
                key={web._id}
              >
                <table className="text-left text-gray-500 lg:w-full w-[1040px] ">
                  <tbody className="">
                    <tr className="text-left bg-white ">
                      <td className="py-5 pl-3">
                        <img src={web.img} alt="" className="w-14" />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-xl font-medium text-black">
                            {web.Job_title}
                          </h3>
                          <p className="text-base font-normal">{web.Company}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left text-black">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                          <p className="text-lg">
                            ${web.minPrice} - ${web.maxPrice} / month
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-lg font-normal text-black">
                            {web.Location}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-lg text-center text-white bg-gray-400 ">
                          {web.Experience_level}
                        </div>
                      </td>
                      <td className="py-4 text-end">
                        <Link
                          to={`/user/singleJob/${web._id}`}
                          className="inline-flex items-center px-5 py-2.5 mb-2 ml-2 font-medium text-center text-base text-white border border-blue-700 rounded-lg hover:text-primary bg-primary hover:bg-transparent"
                        >
                          BID NOW
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            ))}
          </TabPanel>
          <TabPanel>
            {isLoading && (
              <div>
                <progress className="w-56 progress"></progress>
              </div>
            )}
            {isError && <div>Error fetching data</div>}

            {digitalCategories?.map((web) => (
              <motion.div
                whileHover="hover"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.9, ease: "backInOut" }}
                className="relative px-4 py-4 my-6 overflow-x-auto shadow-lg sm:rounded-lg"
                key={web._id}
              >
                <table className="text-left text-gray-500 lg:w-full w-[1040px] ">
                  <tbody className="p">
                    <tr className="text-left bg-white ">
                      <td className="px-6 py-4 border-r-2">
                        <div className="text-lg ">
                          {/* {web.Date_posted}
                          {
                            (formatDistance(
                              parseISO(web.Date_posted, new Date())
                            ),
                            new Date())
                          }{" "} */}
                          {formatDistanceStrict(
                            parseISO(web.Date_posted, new Date()),
                            baseDate
                          )}{" "}
                          ago
                        </div>
                      </td>
                      <td className="py-5 pl-3">
                        <img src={web.img} alt="" className="w-14" />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-xl font-medium text-black">
                            {web.Job_title}
                          </h3>
                          <p className="text-base font-normal">{web.Company}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left text-black">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                          <p className="text-lg">
                            ${web.minPrice} - ${web.maxPrice} / month
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-lg font-normal text-black">
                            {web.Location}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-lg text-center text-white bg-gray-400 ">
                          {web.Experience_level}
                        </div>
                      </td>
                      <td className="py-4 text-end">
                        <Link
                          to={`/user/singleJob/${web._id}`}
                          className="inline-flex items-center px-5 py-2.5 mb-2 ml-2 font-medium text-center text-base text-white border border-blue-700 rounded-lg hover:text-primary bg-primary hover:bg-transparent"
                        >
                          BID NOW
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            ))}
          </TabPanel>
          <TabPanel>
            {isLoading && (
              <div>
                <progress className="w-56 progress"></progress>
              </div>
            )}
            {isError && <div>Error fetching data</div>}

            {graphicCategories?.map((web) => (
              <motion.div
                whileHover="hover"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.9, ease: "backInOut" }}
                className="relative px-4 py-4 my-6 overflow-x-auto shadow-lg sm:rounded-lg"
                key={web._id}
              >
                <table className="text-left text-gray-500 lg:w-full w-[1040px] ">
                  <tbody className="p">
                    <tr className="text-left bg-white ">
                      <td className="px-6 py-4 border-r-2">
                        <div className="text-lg ">
                          {/* {web.Date_posted}
                          {
                            (formatDistance(
                              parseISO(web.Date_posted, new Date())
                            ),
                            new Date())
                          }{" "} */}
                          {formatDistanceStrict(
                            parseISO(web.Date_posted, new Date()),
                            baseDate
                          )}{" "}
                          ago
                        </div>
                      </td>
                      <td className="py-5 pl-3">
                        <img src={web.img} alt="" className="w-14" />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-xl font-medium text-black">
                            {web.Job_title}
                          </h3>
                          <p className="text-base font-normal">{web.Company}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left text-black">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                          <p className="text-lg">
                            ${web.minPrice} - ${web.maxPrice} / month
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5f63ff"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-lg font-normal text-black">
                            {web.Location}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-lg text-center text-white bg-gray-400 ">
                          {web.Experience_level}
                        </div>
                      </td>
                      <td className="py-4 text-end">
                        <Link
                          to={`/user/singleJob/${web._id}`}
                          className="inline-flex items-center px-5 py-2.5 mb-2 ml-2 font-medium text-center text-base text-white border border-blue-700 rounded-lg hover:text-primary bg-primary hover:bg-transparent"
                        >
                          BID NOW
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BrowseCategory;

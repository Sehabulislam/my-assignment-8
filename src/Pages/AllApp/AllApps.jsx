import React, { useState } from "react";
import SingleApp from "./SingleApp";
import { RiApps2AiFill } from "react-icons/ri";
import Loading from "../../Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import useApps from "../../Hooks/useApps";

const AllApps = () => {
  const [search, setSearch] = useState("");

  const { allAppsData, loading, error } = useApps();
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  const trim = search.trim().toLowerCase();
  const filteredApps = trim ? allAppsData.filter((app) => app.title.toLowerCase().includes(trim)) : allAppsData;
  const isNotFound = filteredApps.length === 0 && trim.length > 0; 
 
  return (
    <div className="md:w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center mt-5 md:mt-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold flex items-center gap-3 m-2">
            Our All Applications
            <RiApps2AiFill />
          </h2>
          <p className="text-gray-400 md:m-2 text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="flex justify-between items-center gap-5 md:gap-210 mt-5">
            <div>
              <h2 className="text-lg font-bold whitespace-nowrap">
                <span>({filteredApps.length})</span> Apps Found
              </h2>
            </div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
              value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        {isNotFound ? (
          <div className="py-10 text-center w-full ">
            <h3 className="text-5xl font-bold text-gray-500">
              App Not Found
            </h3>
            <p className=" mt-5 text-gray-500 font-semibold">
              Please try changing your search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 w-10/12 mx-auto gap-5 py-10">
            {
            filteredApps.map((app) => (
              <SingleApp key={app.id} app={app}></SingleApp>
            ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;

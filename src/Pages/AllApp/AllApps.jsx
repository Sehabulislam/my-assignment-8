import React from "react";
import { useLoaderData } from "react-router";
import SingleApp from "./SingleApp";

const AllApps = () => {
  const allAppsData = useLoaderData();
//   console.log(allAppsData);
  return (
    <div className="md:w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center mt-5 md:mt-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold flex items-center gap-3 m-2">
            Our All Applications
          </h2>
          <p className="text-gray-400 md:m-2 text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-10/12 mx-auto gap-5 py-10">
          {
          allAppsData.map((app) => <SingleApp key={app.id} app={app}></SingleApp> )
          }
        </div>
      </div>
    </div>
  );
};

export default AllApps;

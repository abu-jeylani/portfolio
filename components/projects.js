import React from "react";

export default function ProjectCard({
  reactIcon,
  projectName,
  projectDescription,
  frontEnd,
  backEnd,
  appLink,
  githubLink,
}) {
  return (
    <section className=" portfolio-section transition duration-200 mb-1 dark:bg-inherit mt-6">
      <div className="shadow-inner rounded-3xl  dark:shadow-inner dark:shadow-teal-800 p-10 d flex-1 max-w-3xl  mx-auto ">
        <div className="dark:text-teal-600 text-4xl flex justify-center mb-5">
          {reactIcon}
        </div>

        <h2 className=" dark:text-teal-600 font-extrabold mb-6 text-center">
          {projectName}
        </h2>
        <p className="py-2 text-center text-sm dark:text-white">
          {projectDescription}
        </p>

        <h4 className="pt-2 text-sm dark:text-teal-600 text-center mb-2">
          Frontend
        </h4>
        <p className="text-gray-800 text-center  text-sm dark:text-white py-1 ">
          {frontEnd}
        </p>
        <h4 className="pt-2 dark:text-teal-600 text-sm text-center mb-2">
          Backend
        </h4>
        <p className="text-gray-800 text-sm text-center  dark:text-white py-1">
          {backEnd}
        </p>
        <div className="flex justify-center mt-8 gap-x-8">
          <button className="transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r from-black to-gray-700  dark:from-teal-500  dark:to-teal-600 dark:text-white-400 font-mono dark: text-white px-4 py-2 border-none rounded-lg ">
            <a href={appLink}> WApp</a>{" "}
          </button>
          <button className=" transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r from-black to-gray-700 dark:from-teal-500  dark:to-teal-600 dark:text-white-400 font-mono dark: text-white px-4 py-2 border-none rounded-lg ">
            <a href={githubLink}>Github</a>
          </button>
        </div>
      </div>
    </section>
  );
}

import Head from "next/head";
import { useState } from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiCloset } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import Image from "next/image";
import { BsFillMoonFill, BsSun, BsCloudDownload } from "react-icons/bs";
import personalPhoto from "../public/pic2.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const downloadPDF = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume 2022.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Abu&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen font-mono bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          {darkMode ? (
            <BsSun
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-md transition duration-200 hover:scale-125"
            />
          ) : (
            <BsFillMoonFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-xl transition duration-200 hover:scale-125"
            />
          )}

          <ul>
            <li className="transition duration-200 hover:scale-110 text-center">
              <a
                className="cursor-pointer bg-gradient-to-r text-sm from-teal-500 text- to-teal-600 dark:text-white-400 font-normal dark: text-white px-4 py-2 border-none rounded-lg ml-8 transition duration-200 hover:scale-130"
                onClick={downloadPDF}
              >
                Resume{" "}
                <BsCloudDownload className=" ml-1  inline-block text-sm " />
              </a>
            </li>
          </ul>
        </nav>
        <section className="bio-section">
          <div>
            <div className="pt-10 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto text-center">
              <div className="mb-10">
                <h1 className="mb-1 font-mono text-4xl text-black-100 md:text-6xl">
                  <span className="inline-flex h-20 pt-2  overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                    hi, I&apos;m Abu
                  </span>
                  <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>{" "}
                </h1>
              </div>
              <p className="text-md pb-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto  text-center">
                {" "}
                I&apos;m a Software Engineer with expertise in Robotic Process
                Automation and Full Stack Web Development. My journey started in
                2018 when I got my start as a Robotic Process Automation
                Engineer.
              </p>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto  text-center">
              As of late, I have been fascinated with developing web apps and
              doing Full Stack Development. As you&apos;ll see below, the
              projects I have been working on lately are React.js with various
              backend setups.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-gray-400  ">
            <a
              href="https://github.com/abu-jeylani"
              className="transition duration-200 hover:scale-125"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abu-m-5884a676/IMG_7967"
              className="transition duration-200 hover:scale-125"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 transition duration-200 hover:scale-110">
            <Image
              src={personalPhoto}
              layout="fill"
              objectFit="cover"
              alt="abu"
            />
          </div>
        </section>
        <section className="portfolio-section transition duration-200  mb-10 mt-20 dark:bg-inherit">
          <div className="shadow-inner rounded-lg  dark:shadow-inner dark:shadow-teal-800 p-10 d flex-1 max-w-3xl  mx-auto ">
            <BsCalendarEvent className="text-teal-600 text-4xl m-auto mb-5" />
            <h2 className=" text-teal-600 font-extrabold mb-6 text-center">
              Events.IO
            </h2>
            <p className="py-2 text-center text-sm dark:text-white">
              An event organizer app that I developed to enable organizations to
              have a central place to showcase events happening in their
              communities.
            </p>

            <h4 className="pt-2 text-sm text-teal-600 text-center mb-2">
              Frontend
            </h4>
            <p className="text-gray-800 text-center  text-sm dark:text-white py-1 ">
              React with Next.js.
            </p>
            <h4 className="pt-2 text-teal-600 text-sm text-center mb-2">
              Backend
            </h4>
            <p className="text-gray-800 text-sm text-center  dark:text-white py-1">
              Strapi.io & Postgres
            </p>
            <div className="text-center pt-10">
              <button className="transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r  from-teal-500 t to-teal-600 dark:text-white-400 font-normal dark: text-white px-4 py-2 border-none rounded-lg ml-8 ">
                <a href="https://co-events-io.netlify.app/"> WApp</a>{" "}
              </button>
              <button className=" transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r from-teal-500  to-teal-600 dark:text-white-400 font-normal dark: text-white px-4 py-2 border-none rounded-lg ml-8 ">
                <a href="https://github.com/abu-jeylani/community-events-frontend">
                  Github
                </a>
              </button>
            </div>
          </div>
        </section>
        <section className=" portfolio-section transition duration-200 mb-1 dark:bg-inherit">
          <div className="shadow-inner rounded-lg  dark:shadow-inner dark:shadow-teal-800 p-10 d flex-1 max-w-3xl  mx-auto ">
            <BiCloset className="text-teal-600 text-4xl m-auto mb-5" />
            <h2 className=" text-teal-600 font-extrabold mb-6 text-center">
              Ihsaan Clothing
            </h2>
            <p className="py-2 text-center text-sm dark:text-white">
              An e-commerce website I developed that has features such as
              creating an account, adding products to a cart, placing an order
              and processing payment.
            </p>

            <h4 className="pt-2 text-sm text-teal-600 text-center mb-2">
              Frontend
            </h4>
            <p className="text-gray-800 text-center  text-sm dark:text-white py-1 ">
              React with hooks and redux-saga.
            </p>
            <h4 className="pt-2 text-teal-600 text-sm text-center mb-2">
              Backend
            </h4>
            <p className="text-gray-800 text-sm text-center  dark:text-white py-1">
              Firebase, using firestore for the NoSQL DB and Authentication for
              signup and signins.
            </p>
            <div className="text-center pt-10">
              <button className="transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r  from-teal-500 t to-teal-600 dark:text-white-400 font-normal dark: text-white px-4 py-2 border-none rounded-lg ml-8 ">
                <a href="https://ihsaan-clothing.netlify.app/"> WApp</a>{" "}
              </button>
              <button className=" transition duration-200 hover:scale-110 w-20 text-xs cursor-pointer bg-gradient-to-r from-teal-500  to-teal-600 dark:text-white-400 font-normal dark: text-white px-4 py-2 border-none rounded-lg ml-8 ">
                <a href="https://github.com/abu-jeylani/ihsaan-clothing-v1">
                  Github
                </a>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="h-20"></div>
        </section>
      </main>
    </div>
  );
}

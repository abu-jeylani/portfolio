import Head from "next/head";
import { useState } from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiCloset } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import Image from "next/image";
import personalPhoto from "../public/personal.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const downloadPDF = () => {
    fetch("Resume 2022.pdf").then((response) => {
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

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <BsFillMoonFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-xl text-gra"
          />
          <ul className="flex items-center">
            <li>
              <a
                className="cursor-pointer bg-gradient-to-r from-teal-500 text- to-teal-600 dark:text-white-400 dark: text-white px-4 py-2 border-none rounded-md ml-8"
                onClick={downloadPDF}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <section className="min-h-screen">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abu
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
          </div>
          <div className="text-md py-5 leading-8 text-gray-800 text-center">
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software Engineer with expertise in Robotic Process Automation and
              Full Stack Web Development. My journey started in 2018 when I
              transitioned from being a Corporate Accountant to a Software
              Engineer.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Since then, I have been able to earn a M.S. in Information Systems
              from the University Of Colorado Denver in 2020 and have become
              well versed in the two domains through experience,
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black dark:text-gray-400">
            <a href="https://github.com/abu-jeylani">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/abu-m-5884a676/IMG_7967">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
            <Image src={personalPhoto} layout="fill" objectFit="cover" />
          </div>
          <div className="text-center shadow-md  dark:shadow-teal-800 p-10 my-20 mb-10 dark:bg-inherit flex-1 max-w-3xl m-auto transition duration-200 hover:scale-105">
            <h2 className=" text-teal-600 font-extrabold"> Ihsaan Clothing</h2>
            <BiCloset className="text-teal-600 text-4xl m-auto mt-5" />
            <p className="py-2  dark:text-white">
              A e-commerce website I developed that has features such as
              creating an account, adding products to a cart, placing an order
              and processing payment. Click{" "}
              <a
                href="https://ihsaan-clothing.netlify.app/"
                className="text-teal-600 hover:text-teal-400"
              >
                here
              </a>{" "}
              to check out web app and click{" "}
              <a
                href="https://github.com/abu-jeylani/ihsaan-clothing-v1"
                className="text-teal-600 hover:text-teal-400 "
              >
                here
              </a>{" "}
              to check out github repo.
            </p>
            <h4 className="pt-2 text-teal-600 font-bold">Frontend</h4>
            <p className="text-gray-800 dark:text-white py-1">
              React with hooks and redux-saga.
            </p>
            <h4 className="pt-2 text-teal-600 font-bold">Backend</h4>
            <p className="text-gray-800  dark:text-white py-1">
              Firebase, using firestore for the NoSQL DB and Authentication for
              signup and signins.
            </p>
          </div>
          <div className="text-center text-white dark:text-gray-900">
            developedbyabu
          </div>
        </section>
      </main>
    </div>
  );
}

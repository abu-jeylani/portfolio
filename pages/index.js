import Head from "next/head";
import { useState } from "react";

import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import Image from "next/image";
import personalPhoto from "../public/personal.png";
import ihsaan from "../public/ihsaan-clothing-home-page.png";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div>
      <Head>
        <title>Abu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons ">developedbyabu</h1>
          <ul className="flex items-center">
            <li>
              <FaLaptopCode
                className="w-10 h-6 "
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                onClick={downloadPDF}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <section className=" min-h-screen text-center drop-shadow-lg shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium">Abu </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Software Engineer with expertise in RPA and Full Stack Web
              Development. Journey started in 2018 when I transitioned from
              being a Corporate Accountant to an RPA Developer at Prologis.
              Since then, I've been able to earn a M.S. in Information Systems
              from the University Of Colorado Denver in 2020.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://github.com/abu-jeylani">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/abu-m-5884a676/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              alt="Abu Headshot"
              src={personalPhoto}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section className="py-2">
          <div className="lg:flex gap-10">
            <div className="text-center drop-shadow-lg shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://ihsaan-clothing.netlify.app/">
                <Image
                  alt="ihsaan app"
                  src={ihsaan}
                  width={400}
                  height={100}
                  className="mx-auto cursor-pointer"
                />
              </a>
              <a href="https://ihsaan-clothing.netlify.app/">
                <h3 className="text-lg font-medium pt-8 pb-2 cursor-pointer">
                  Ihsaan Clothing
                </h3>
              </a>

              <p className="py-2">
                An e-commerce website I developed for customers to buy and sell
                fashion products
              </p>
              <h4 className="py-4 text-teal-600">Tech Used:</h4>
              <p className="text-gray-800 py-1">React (Front-End)</p>
              <p className="text-gray-800 py-1">Firebase (Back-End)</p>
              <p className="text-gray-800 py-1">Github (Repo)</p>
              <p className="text-gray-800 py-1">Netlify (Hosting Service)</p>
            </div>
          </div>
        </section>
        <section className="py-10 text-center drop-shadow-lg shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <h1 className=" text-center text-lg mb-10">
            Quick Toot Of My Own Horn
          </h1>
          <div>
            <p className="text-md py-2 leading-8 text-black-800 dark:text-black-200">
              Since the beginning of my journey as a Software Engineer, I've
              been continually learning. In the RPA space, I've been able to
              learn and master two of the biggest RPA technologies - UiPath and
              Blue Prism and earned certificates in both of them. In the cloud
              space, I've gotten the opportunity to use AWS, Google Cloud, and
              Microsoft Azure. In the backend space, I've worked in Node.js for
              two years at Olive AI using Typescript, MongoDB, and AWS EC2s to
              run bots I developed. Now, I'm developing web apps doing fullstack
              engineering.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

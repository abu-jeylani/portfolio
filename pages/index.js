import { useContext } from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="bio-section">
        <div className="min-h-screen font-mono bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <div className="pt-10 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto text-center">
            <div className="mb-10">
              <h1 className="mb-1 font-mono text-4xl text-black-100">
                <span className="inline-flex h-20 pt-10 dark:text-white overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  hi, I&apos;m Abu
                </span>
                <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>{" "}
              </h1>
            </div>
            <p className="text-sm pb-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto text-center">
              {" "}
              I&apos;m a Software Engineer with expertise in Robotic Process
              Automation and Full Stack Web Development. My journey began in
              2018 when I started out as a Robotic Process Automation Engineer.
            </p>
          </div>
          <p className="text-sm pt-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto  text-center">
            As of late, I have been fascinated with developing web apps and
            doing Full Stack Development. As you&apos;ll see in the projects
            section, the projects I have been working on are React.js with
            various backend setups.
          </p>
          <div className="text-5xl mt-20 flex justify-center gap-x-16  text-black dark:text-gray-400  ">
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
          <div className="h-20 dark:text-gray-200 font-mono flex justify-center mt-12 underline underline-offset-4 text-xs">
            <Link
              href="/projects"
              className="text-teal-600 hover:text-teal-400"
            >
              See Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import React from "react";
import Layout from "../components/layout";
import { BsCalendarEvent } from "react-icons/bs";
import { BiCloset } from "react-icons/bi";
import ProjectCard from "../components/projects";

export default function Projects() {
  return (
    <Layout>
      <div className=" flex flex-col w-10/12 mx-auto font-mono">
        <h1 className="dark:text-white text-2xl pt-16 mx-auto pb-4 ">
          Projects
        </h1>
        <ProjectCard
          reactIcon={<BsCalendarEvent />}
          projectName="Events.IO"
          projectDescription="An event organizer app that I developed to enable organizations to
          have a central place to showcase events happening in their
          communities."
          frontEnd="React with Next.js."
          backEnd="Strapi.io & Postgres"
          appLink="https://co-events-io.netlify.app/"
          githubLink="https://github.com/abu-jeylani/community-events-frontend"
        />
        <ProjectCard
          reactIcon={<BiCloset />}
          projectName="Ihsaan Clothing"
          projectDescription="An e-commerce website I developed that has features such as
          creating an account, adding products to a cart, placing an order
          and processing payment."
          frontEnd=" React with hooks and redux-saga."
          backEnd="Firebase, using firestore for the NoSQL DB and Authentication for
          signup and signins."
          appLink="https://ihsaan-clothing.netlify.app/"
          githubLink="https://github.com/abu-jeylani/ihsaan-clothing-v1"
        />
        <section>
          <div className="h-20 "></div>
        </section>
      </div>
    </Layout>
  );
}

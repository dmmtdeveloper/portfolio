
import React  from "react";
import { Heading } from "./Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";



export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <Heading>My Projects</Heading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};


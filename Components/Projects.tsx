"use client";
import React from "react";
import { Heading } from "./Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

import { useSectionInView } from "@/lib/hooks";

export const Projects = () => {
  /*----scroll functionality----*/
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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

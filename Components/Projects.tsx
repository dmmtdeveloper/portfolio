import React from "react";
import { Heading } from "./Heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export const Projects = () => {
  return (
    <section>
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

type ProjectsProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectsProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Image src={imageUrl} alt={title}/>
    </section>
  );
}

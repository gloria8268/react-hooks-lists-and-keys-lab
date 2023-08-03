import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
    // console.log(projects);

    const projectElement = projects.map(item => {
      return <ProjectItem key={item.id} {...item}/>
    })
    
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElement}</div>
    </div>
  );
}

export default ProjectList;

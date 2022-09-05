import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../ui"
import ProjectCard from "./ProjectCard"

export default function Library() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  function onDelete(id) {
    const updatedProject = projects.filter((project) => project.id !== id);
    setProjects(updatedProject);
  }

  function handleUpdate(updatedProject) {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(updatedProjects);
  }

  return (
    <Wrapper>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={`project-${project.id}`} project={project} setProjects={setProjects} onDelete={onDelete} handleUpdate={handleUpdate}/>
        ))
      ) : (
        <div className="no-project">
          <h2>No Projects Found</h2>
          <br />
          <Button as={Link} to="/new">
            Start a New Project
          </Button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  div.no-asset {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
`;
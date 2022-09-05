import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Box, Button } from "../ui";
import ProjectUpdateForm from "./ProjectUpdateForm";

export default function ProjectCard({ project, setProjects, onDelete, handleUpdate }) {
  const [showForm, setShowForm] = useState(false);

  function handleDelete(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  
  return (
    <Project key={project.id}>
      <Box>
          <h2>{project.name}</h2>
          <p>{project.status}</p> 
          <p>{project.summary}</p>
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(project.id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(project.id)}>Update</Button>
          </div>
          {showForm ? <ProjectUpdateForm project={project} setProject={setProjects} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      </Box>
    </Project>
  );
}

const Project = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;
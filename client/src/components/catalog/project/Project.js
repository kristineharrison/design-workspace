import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import { Box, Button } from "../../ui"
import ProjectUpdateForm from "./ProjectUpdateForm"

export default function Project({ projectData, setProjects, onDelete, handleUpdate }) {
  const [showForm, setShowForm] = useState(false)

  function handleDelete(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    })
    onDelete(id)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }
  
  
  return (
    <Card>
      <Box>
          <h2>{projectData.name}</h2>
          <p>{projectData.status}</p> 
          <p>{projectData.summary}</p>
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(projectData.id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(projectData.id)}>Update</Button>
            <Button as={ Link } to= {`/projects/${projectData.id}`}>View Project</Button>
          </div>
          {showForm ? <ProjectUpdateForm projectData={projectData} setProject={setProjects} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      </Box>
    </Card>
  );
}

const Card = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;
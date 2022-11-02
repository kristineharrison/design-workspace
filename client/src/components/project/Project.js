import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProjectUpdateForm from "./ProjectUpdateForm"
import AssetCard from "../catalog/AssetCard"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"
import uuid from "react-uuid"

export default function Project({ handleDeleteProject, user }) {
  // Set update form state, start with hidden
  const [showForm, setShowForm] = useState(false)
  // Set project state
  const [{ data: project, error, status }, setProject] = useState({
    data: null,
    error: null,
    status: "pending",
  })
  
  const { id } = useParams()

  // Fetch individual project data and update status
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((project) =>
          setProject({ data: project, error: null, status: "resolved" })
        )
      } else {
        r.json().then((err) =>
          setProject({ data: null, error: err.error, status: "rejected" })
        )
      }
    })
  }, [id])

  // Update status state
  if (status === "pending") return <h4>Loading...</h4>;
  if (status === "rejected") return <h4>Error: {error.error}</h4>;

  // Toggle update form on click
  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  function handleUpdate(updated) {
    const updatedProject = project.id === updated.id ? updated : project;
    setProject({ data: updatedProject, error: null, status: "resolved"})
  }
  
  return (
    <Container>
      <TextBox>
        <h1>{project.proname}</h1>
        <p className="status">Status: {project.prostatus}</p>
        <p>{project.summary}</p>
        <p className="tags">Owner: {user.username}</p>
      </TextBox>

      <ButtonBox>
        <Button variant="outline-secondary"
          onClick={() => handleDeleteProject(id)}>Delete Project</Button>
        <Button variant="outline-secondary"
          onClick={() => handleClick(id)}>Update Project</Button>
      </ButtonBox>
      {showForm ?
        <ProjectUpdateForm
          project={project}
          setProject={setProject}
          handleClick={handleClick}
          handleUpdate={handleUpdate} />
        : null} 
    
      <h3>Associated Assets</h3>
      <Collection>
        {/* Display list of associated assets or option to add one if none */}
        {project.assets.length > 0 ? (
          project.assets.map((asset) => (
            <AssetCard key={uuid()} asset={asset} />
          ))
        ) : (
        <div>
          <h2>No Assets Found</h2>
          <br />
          <Button variant="outline-secondary" as={Link} to="/new-asset">
            Upload a New Asset
          </Button>
        </div>
        )}
      </Collection>
    </Container>
  )
}

const Container = styled.section`
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.status {
  font-weight: 700;
  text-transform: uppercase;
}

h3 {
  margin-top: 30px;
}
`
const Collection = styled.div`
margin-top: 20px;
display: flex;
flex-flow: row wrap;
justify-content: center;
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
width: 60%;
align-items: center;

.tags {
  font-weight: 500;
  text-transform: uppercase;
}
`
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 10px;
`
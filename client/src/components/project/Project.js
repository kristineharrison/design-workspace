import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import uuid from "react-uuid"

import ProjectUpdateForm from "./ProjectUpdateForm"
import AssetCard from "../catalog/AssetCard"

import styled from "styled-components"
import { Button } from "../ui"

export default function Project({ handleDeleteProject }) {
  // Set update form state, start with hidden
  const [showForm, setShowForm] = useState(false)
  // Set project state
  const [{ data: project, error, status }, setProject] = useState({
    data: null,
    error: null,
    status: "pending",
  })
  
  const history = useHistory()
  const { id } = useParams()

  // Fetch individual project data and update status
  useEffect(() => {
    fetch(`/projects/${id}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((project) =>
          setProject({ data: project, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setProject({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  // Toggle update form on click
  function handleClick() {
    setShowForm((showForm) => !showForm)
  }
  
  return (
    <Container>
      {/* Display project data */}
      <h2>{project.proname}</h2>
      <p>{project.prostatus}</p>
      <p>{project.summary}</p>
        
      <div>
        {/* Display list of associated assets or option to add one if none */}
        {project.assets.length > 0 ? (
          project.assets.map((asset) => (
            <AssetCard key={uuid()} asset={asset} />
          ))
        ) : (
        <div className="no-asset">
          <h2>No Assets Found</h2>
          <br />
          <Button as={Link} to="/new-asset">
            Upload a New Asset
          </Button>
        </div>
        )}
      </div>

      <div className="update-button">
        <Button variant="outline" onClick={() => handleDeleteProject(id)}>Delete Project</Button>
        <Button variant="outline" onClick={() => handleClick(id)}>Update Project</Button>
      </div>
      {showForm ? <ProjectUpdateForm project={project} setProject={setProject} handleClick={handleClick}/> : null} 
    </Container>
  );
}

const Container = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-direction: column;
gap: 40px
overflow-x: auto;
`;
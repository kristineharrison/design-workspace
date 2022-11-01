import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import uuid from "react-uuid"
import AssetUpdateForm from "./AssetUpdateForm"
import AddProject from "./AddProject"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"


export default function Asset({ handleDeleteAsset, user }) {
  // Set update form state, start with hidden
  const [showForm, setShowForm] = useState(false)
  // Set asset state
  const [{ data: asset, error, status }, setAsset] = useState({
    data: null,
    error: null,
    status: "pending",
  })

  const history = useHistory();
  const { id } = useParams()

  // Fetch individual asset data and update status
  useEffect(() => {
    fetch(`/assets/${id}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((asset) =>
          setAsset({ data: asset, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setAsset({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  // Update status state
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  // Toggle update form on click
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddProject(newProjectId) {
    setAsset({ error, status, data: {
        ...asset, projects: [...asset.projects, newProjectId],
      }
    })
  }

  function handleUpdate(updated) {
    const updatedAsset = asset.id === updated.id ? updated : asset;
    setAsset({ data: updatedAsset, error: null, status: "resolved"})
  }
 
  return (
    <Container>
      {asset.image_url ? <img src={asset.image_url} alt={asset.title} />
        : <img src={asset.image_data} alt={asset.title} />}
      <TextBox>
        <h1>{asset.title}</h1>
        <cite>Source: {asset.source}</cite>
        <p className="desc">{asset.description}</p>
        <div>
          <p className="tags">
            Tags: {asset.tags} <br />
            Owner: {user.username}
          </p>
        </div>   
      </TextBox>
       
      <ButtonBox>
        <Button variant="outline-secondary"
          onClick={() => handleDeleteAsset(id)}>Delete Asset</Button>
        <Button variant="outline-secondary"
          onClick={() => handleClick(asset.id)}>Update Asset</Button>
      </ButtonBox>

      {showForm ?
        <AssetUpdateForm asset={asset}
          handleClick={handleClick}
          handleUpdate={handleUpdate} />
        : null}
      
      {/* Map over associated projects */}
      <h3>Appears in These Projects</h3>
      <ProjectCollection>
        {asset.projects.length > 0 ? (
          asset.projects.map((project) => (
            <Button
              variant="outline-secondary"
              as={Link}
              to={`/projects/${project.id}`}
              key={uuid()}>{project.proname}
            </Button>
          ))
        ) : (
        <div className="no-asset">
          <p>Not in any projects</p>
        </div>
        )}
      </ProjectCollection>
      <AddProject onAddProject={handleAddProject} asset={asset} />
    </Container>
  );
}

const Container = styled.div`
margin-top: 40px;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;

img {
  height: 500px;
  width: 800px;
  object-fit: contain;
}

h3 {
  margin-top: 30px;
}
`

const ProjectCollection = styled.div`
max-width: 500px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 20px;
overflow-x: auto;
`

const TextBox = styled.div`
margin-top: 30px;
width: 500px;
display: flex;
flex-direction: column;
overflow-x: auto;
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
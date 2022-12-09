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

  const history = useHistory()
  const { id } = useParams()

  // Fetch individual asset data and update status
  useEffect(() => {
    fetch(`/assets/${id}`)
    .then((r) => {
      if (r.ok) {
        r.json().then((asset) =>
          setAsset({ data: asset, error: null, status: "resolved" })
        )
      } else {
        r.json().then((err) =>
          setAsset({ data: null, error: err.error, status: "rejected" })
        )
      }
    })
  }, [id])

  // Update status state
  if (status === "pending") return <h4>Loading...</h4>
  if (status === "rejected") return <h4>Error: {error.error}</h4>

  // Toggle update form on click
  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  // Add to existing project
  function handleAddProject(newProjectId) {
    setAsset({ error, status, data: {
        ...asset, projects: [...asset.projects, newProjectId],
      }
    })
  }

  // Update asset info
  function handleUpdate(updated) {
    const updatedAsset = asset.id === updated.id ? updated : asset
    setAsset({ data: updatedAsset, error: null, status: "resolved"})
  }
 
  return (
    <div className="container">
      {asset.image_url ? <img src={asset.image_url} alt={asset.title} className="asset" />
        : <img src={asset.image_data} alt={asset.title} className="asset"/>}
      
      {/* Asset info */}
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
       
      {/* Delete Asset or Update Asset buttons */}
      <ButtonBox>
        <Button variant="outline-secondary"
          onClick={() => handleDeleteAsset(id)}>Delete Asset</Button>
        <Button variant="outline-secondary"
          onClick={() => handleClick(asset.id)}>Update Asset</Button>
      </ButtonBox>

      {/* Update Asset Form Toggle */}
      {showForm ?
        <AssetUpdateForm asset={asset}
          handleClick={handleClick}
          handleUpdate={handleUpdate} />
        : null}
      
      <SmallContainer>
        {/* Display list of associated project or "Not in any projects" if none */}
        
        <ProjectCollection>
          <h3>Associated Projects</h3>
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
      </SmallContainer>   
    </div>
  )
}

// Style-Components CSS
const TextBox = styled.div`
margin-top: 30px;
width: 75%;
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
  margin-bottom: 40px;
  gap: 10px;
`

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  width: 65%;
`
const ProjectCollection = styled.div`
display: flex;
flex-flow: column;
gap: 10px;
overflow-x: auto;
min-width: 50%;
`
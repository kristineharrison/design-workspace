import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import uuid from "react-uuid"

import AssetUpdateForm from "./AssetUpdateForm"
import AddProject from "./AddProject"

import styled from "styled-components"
import { Button } from "../ui"

export default function Asset({ handleDeleteAsset  }) {
  // Set update form state, start with hidden
  const [showForm, setShowForm] = useState(false)
  // Set asset state
  const [{ data: asset, error, status }, setAsset] = useState({
    data: null,
    error: null,
    status: "pending",
  })

  // const history = useHistory();
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

  function handleAddProject(newProject) {
    setAsset({
      error,
      status,
      data: {
        ...asset,
        projects: [...asset.projects, newProject],
      }
    })
  }
  
  return (
    <Container>
      {/* Display asset data */}
      <img src={asset.image_data} alt={asset.title}/>
      <p>
        <span>{asset.title}</span><br />
        <cite>Source: {asset.source}</cite>
      </p> 
      <p>{asset.description}</p>
      <p>{asset.tags}</p>
       
      <div className="update-button">
        <Button variant="outline" onClick={() => handleDeleteAsset(id)}>Delete Asset</Button>
        {/* <Button variant="outline" onClick={() => handleClick(asset.id)}>Update</Button> */}
      </div>
      {showForm ? <AssetUpdateForm asset={asset} setAsset={setAsset} handleClick={handleClick}/> : null}  
      
      {/* Map over associated projects */}
      <h3>Projects</h3>
      <ProjectCollection>
        {asset.projects.length > 0 ? (
          asset.projects.map((project) => (
            <Button variant="outline" as={ Link } to= {`/projects/${project.id}`} key={uuid()}>{project.proname}</Button>

          ))
        ) : (
        <div className="no-asset">
          <h2>Not in any projects</h2>
        </div>
        )}
      </ProjectCollection>
      <AddProject onAddProject={handleAddProject} asset={asset} />
    </Container>
  );
}

const Container = styled.div`
max-width: 500px;
margin: 20px auto;
display: flex;
flex-flow: column;
gap: 40px;
overflow-x: auto;
`;

const ProjectCollection = styled.div`
max-width: 500px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 20px;
overflow-x: auto;
`;
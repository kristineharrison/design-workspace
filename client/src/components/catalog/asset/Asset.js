import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Box, Button } from "../../ui"
import AssetUpdateForm from "./AssetUpdateForm"

export default function Asset({ onDelete, handleUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [asset, setAsset] = useState([])

  // // Get asset data
  // fetch(`/assets/${asset.id}`)
  //     .then((r) => r.json())
  //     .then(setAsset);

  function handleDelete(id) {
    fetch(`/assets/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  
  return (
    <Container key={asset.id}>
      <Box>
          {/* <img src={asset.image_data} alt={asset.title}/> */}
          <p>
            <span>{asset.title}</span><br />
            <cite>Source: {asset.source}</cite>
          </p> 
          <p>{asset.description}</p>
          <p>{asset.tags}</p>
          {/* <p>Related projects: {asset.projects.name}</p> */}
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(asset.id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(asset.id)}>Update</Button>
          </div>
          {showForm ? <AssetUpdateForm asset={asset} setAsset={setAsset} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      </Box>
    </Container>
    // <h1>Hello</h1>
  );
}

const Container = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;
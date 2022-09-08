import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../../ui"
import AssetUpdateForm from "./AssetUpdateForm"

export default function Asset({ asset, setAsset, onAssetDelete, handleUpdate }) {
  const [showForm, setShowForm] = useState(false);
  // const [asset, setAsset] = useState([])
  
  const history = useHistory();
  const params = useParams()

  // Get asset data
  useEffect(() => {
    fetch(`/assets/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setAsset(data);
      });
  }, [params.id]);

  const { title, source, description, tags, id } = asset

  function handleDelete(id) {
    fetch(`/assets/${params.id}`, {
      method: "DELETE",
    });
    onAssetDelete(id);
    // setAsset([]);
    history.push("/catalog");
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  return (
    <Container>
      
          <img src={asset.image_data} alt={asset.title}/>
          <p>
            <span>{title}</span><br />
            <cite>Source: {source}</cite>
          </p> 
          <p>{description}</p>
          <p>{tags}</p>
          {/* <p>Related projects: {asset.projects.name}</p> */}
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(id)}>Update</Button>
          </div>
          {showForm ? <AssetUpdateForm asset={asset} setAsset={setAsset} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      
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
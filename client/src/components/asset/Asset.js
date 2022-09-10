import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button } from "../ui"
import styled from "styled-components"
import AssetUpdateForm from "./AssetUpdateForm"

export default function Asset({ handleUpdate }) {
  const [showForm, setShowForm] = useState(false);
  const [asset, setAsset] = useState([])
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

  const { title, source, description, tags, id, projects } = asset

  // function handleDelete(id) {
  //   fetch(`/assets/${id}`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setAsset((assets) =>
  //         assets.filter((asset) => asset.id !== id)
  //       );
  //     }
  //     history.push("/catalog");
  //   });
  // }

  // function handleDelete(id) {
  //   fetch(`/assets/${params.id}`, {
  //     method: "DELETE",
  //   });
  //   onAssetDelete(id);
  //   // setAsset([]);
  //   history.push("/catalog");
  // }

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
       
    
      
          <div className="update-button">
            {/* <Button variant="outline" onClick={() => handleDelete(id)}>Delete</Button> */}
            <Button variant="outline" onClick={() => handleClick(id)}>Update</Button>
          </div>
          {showForm ? <AssetUpdateForm asset={asset} setAsset={setAsset} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      

      {/* Map over associated projects */}
      {console.log({projects})}
      <h3>Projects</h3>
      <ProjectList>
        {projects.length > 0 ? (
          projects.map((project) => (
            
            <Button variant="outline" as={ Link } to= {`/projects/${project.id}`}>{project.proname}</Button>
          ))
        ) : (
        <div className="no-asset">
          <h2>Not in any projects</h2>
        </div>
        )}
      </ProjectList>
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

const ProjectList = styled.div`
max-width: 500px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 20px;
overflow-x: auto;
`;
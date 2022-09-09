import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button, AssetBox } from "../../ui"
import ProjectUpdateForm from "./ProjectUpdateForm"
import AssetCard from "../asset/AssetCard"
import { Link } from "react-router-dom"


export default function Project({ handleUpdate }) {
  // const [project, setProject] = useState([])
  const [showForm, setShowForm] = useState(false);
  // const [asset, setAsset] = useState([])
  const [{ data: project, error, status }, setProject] = useState({
    data: null,
    error: null,
    status: "pending",
  })
  
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    fetch(`/projects/${params.id}`).then((r) => {
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
  }, [params.id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;
 

//  const { proname, prostatus, summary, id, assets} = project
  //Get project data
  // useEffect(() => {
  //   fetch(`/projects/${params.id}`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setProject(data);
  //     });
  // }, [params.id]);

 
  
  {console.log("Project assets: ", {project})}


  function handleDelete(id) {
    fetch(`/projects/${params.id}`, {
      method: "DELETE",
    });
    // onProjectDelete(id);
    history.push("/catalog");
  }

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }
  
  
  return (
    <Container>
          <h2>{project.proname}</h2>
          <p>{project.prostatus}</p>
          <p>{project.summary}</p>

          {/* {project.assets.map((asset) => (
            <AssetBox>
              <img src={asset.image_data} alt={asset.title}/>
              <h2>{asset.title}</h2>
              <p>{asset.description}</p>
              <p>{asset.tags}</p>
              
            </AssetBox>
          ))} */}
        
        
        
        {/* {project.assets.map((asset) => (
          <AssetCard key={`asset-${asset.id}`} asset={asset} setAssets={setAssets} />
        ))}
        </div> */}
        
          <div>
          {project.assets.length > 0 ? (
        project.assets.map((asset) => (
          <AssetCard key={`asset-${asset.id}`} asset={asset} />
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
            {/* <Button variant="outline" onClick={() => handleDelete(id)}>Delete</Button> */}
            <Button variant="outline" onClick={() => handleClick(params.id)}>Update</Button>
          </div>
          {showForm ? <ProjectUpdateForm project={project} setProject={setProject} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      
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
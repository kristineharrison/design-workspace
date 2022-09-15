import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from 'react-bootstrap/Button'
import AssetCard from "./AssetCard"
import ProjectCard from "./ProjectCard"

export default function Catalog({ assets, setAssets, projects, setProjects }) {
  const [ status, setStatus ] = useState("pending")

  // Get project data
  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then((projects) =>
        setProjects(projects),
        setStatus("resolved"));
  }, []);

  // Get asset data
  useEffect(() => {
    fetch("/assets")
      .then((r) => r.json())
      .then((assets) =>
        setAssets(assets),
        setStatus("resolved"));
  }, []);

  if (status === "pending") return <h1>Loading...</h1>;

  return (
    <Container>
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Collection>
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={`project-${project.id}`} project={project}/>
              ))
            ) : (
            <div className="no-asset">
              <h2>No Projects Found </h2>
              <Button variant="outline-secondary" as={Link} to="/new-project">
                Start a New Project
              </Button>
            </div>
            )
          }
        </Collection>
        <div>
          <hr />
          <h1>ASSETS</h1>
        </div>
        <Collection>
          {assets.length > 0 ? (
            assets.map((asset) => (
              <AssetCard key={`asset-${asset.id}`} asset={asset}/>
            ))
            ) : (
            <div className="no-asset">
              <h2>No Assets Found</h2>
              <br />
              <Button variant="outline-secondary" as={Link} to="/new-asset">
                Upload a New Asset
              </Button>
            </div>    
            )
          }
        </Collection>
    </Container>
  );
}

const Container = styled.section`
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div.no-asset {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Collection = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 24px;
  justify-content: center;
`;
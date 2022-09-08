import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../ui"
import AssetCard from "./asset/AssetCard"
import ProjectCard from "./project/ProjectCard"

export default function Catalog({ assets, setAssets, projects, setProjects }) {

  // Get project data
  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  // Get asset data
  useEffect(() => {
    fetch("/assets")
      .then((r) => r.json())
      .then(setAssets);
  }, []);

  return (
    <Wrapper>
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Container>
        {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={`project-${project.id}`} project={projects}/>
        ))
      ) : (
        <div className="no-project">
          <h2>No Projects Found</h2>
          <br />
          <Button as={Link} to="/new-project">
            Start a New Project
          </Button>
        </div>
        
      )}
        </Container>
        <div>
          <hr />
          <h1>ASSETS</h1>
        </div>
        <Container>
        {assets.length > 0 ? (
        assets.map((asset) => (
          <AssetCard key={`asset-${asset.id}`} asset={asset}/>
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
        </Container>
        
     
    </Wrapper>
  );
}

const Wrapper = styled.section`
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

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 24px;
`;

// const ProjectCard = styled.article`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 24px;
// `;

// const AssetCard = styled.article`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 24px;
// `;
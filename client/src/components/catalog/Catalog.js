import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button, Box } from "../ui"

export default function Catalog() {
  const [projects, setProjects] = useState([])
  const [assets, setAssets] = useState([])

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
              <ProjectCard key={`Project-${project.id}`} >
                <Box>
                  <h2>{project.name}</h2>
                  <p>{project.status}</p>
                  <p>{project.summary}</p>
                  <Button as={ Link } to= {`/projects/${project.id}`}>View Project</Button>
                </Box>
              </ProjectCard>
            ))
            ) : (
            <>
              <h2>No Projects Found</h2>
              <Button as={Link} to="/new-project">
                Start a New Project
              </Button>
            </>
          )}
        </Container>
        <div>
          <hr />
          <h1>ASSETS</h1>
        </div>
        <Container>
        {assets.length > 0 ? (
            assets.map((asset) => (
              <AssetCard key={`Asset-${asset.id}`}>
                <Box>
                  <h2>{asset.title}</h2>
                  <p>{asset.source}</p>
                  <p>{asset.description}</p>
                  <Button as={ Link } to= {`/assets/${asset.id}`}>View Asset</Button>
                </Box>
              </AssetCard>
            ))
            ) : (
            <>
              <h2>No Assets Found</h2>
              <Button as={Link} to="/new-asset">
                Create a New Asset
              </Button>
            </>
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

const ProjectCard = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const AssetCard = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
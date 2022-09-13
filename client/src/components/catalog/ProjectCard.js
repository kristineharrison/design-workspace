import React from "react";
import { ProjectBox, Button } from "../ui";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {

  return (
    <Container>
      <ProjectBox>
          <p>
            <span>{project.proname}</span><br />
          </p> 
          <p>{project.summary}</p>
          <div className="update-button">
            <Button as={ Link } to= {`/projects/${project.id}`}>View Project</Button>
          </div>
      </ProjectBox>
    </Container>
  );
}

const Container = styled.div`
min-width: 300px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;
import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"

export default function ProjectCard({ project }) {

  return (
    <ProjectBox>
      {/* Display individual project info */}
      <h2>{project.proname}</h2>
      <p><span>{project.prostatus}</span></p>
      <Button variant="outline-secondary" as={ Link } to= {`/projects/${project.id}`}>
        VIEW PROJECT
      </Button>
    </ProjectBox>
  )
}

// Styled-Components CSS
const ProjectBox = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // margin: 20px;

  span {
    font-weight: 500;
    text-transform: uppercase;
  }
`

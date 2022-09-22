import React from "react"
import { Link } from "react-router-dom"
import { ProjectBox } from "../ui"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"

export default function ProjectCard({ project }) {

  return (
    <ProjectBox>
      <h2>{project.proname}</h2>
      <TextBox>
        <p>{project.prostatus}</p>
      </TextBox>
      
      <Button variant="outline-secondary" as={ Link } to= {`/projects/${project.id}`}>
        View Project
      </Button>
    </ProjectBox>
  )
}

const TextBox = styled.div`
font-weight: 500;
text-transform: uppercase;

`

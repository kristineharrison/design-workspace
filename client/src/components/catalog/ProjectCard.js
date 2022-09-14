import React from "react"
import { Link } from "react-router-dom"
import { ProjectBox } from "../ui"
import Button from 'react-bootstrap/Button'


export default function ProjectCard({ project }) {

  return (
    <ProjectBox>
      <h2>{project.proname}</h2>
      <p>{project.summary}</p>
      <Button variant="outline-secondary" as={ Link } to= {`/projects/${project.id}`}>
        View Project
      </Button>
    </ProjectBox>
  )
}
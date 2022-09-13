import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui"
import styled from "styled-components"
import uuid from "react-uuid"

export default function ProjectList({ user }) {
  // Map over associated projects
  return(
    <Container>
      <h3>Check out a project?</h3>
      <List>
        {user.projects.length > 0 ? (
        user.projects.map((project) => (
          <Button variant="outline" as={ Link } to= {`/projects/${project.id}`} key={uuid()}>{project.proname}</Button>
        ))
        ) : (
        <div className="no-asset">
          <h2>No projects</h2>
        </div>
        )
      }
      </List>  
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
`
const List = styled.div`
display: flex;
flex-flow: row wrap;
gap: 40px;
`
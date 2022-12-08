import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"
import uuid from "react-uuid"

export default function ProjectList({ user }) {
  // Map over associated projects; return list of button links of available projects or return "No projects" if none available
  return(
    <div className="container">
      <h3>Check out a project?</h3>
      <List>
        {user.projects.length > 0 ? (
        user.projects.map((project) => (
          <Button variant="outline-secondary" 
            as={ Link } 
            to= {`/projects/${project.id}`} 
            key={uuid()}>{project.proname}
          </Button>
        ))
        ) : (
        <div className="no-asset">
          <h2>No projects</h2>
        </div>
        )
      }
      </List>  
    </div>
  )
}

// Style-Components CSS
const List = styled.div`
display: flex;
flex-flow: row wrap;
gap: 40px;
`
import React from "react"
import uuid from "react-uuid"
import styled from "styled-components"
import { Button } from "../ui"
import { Link } from "react-router-dom"

export default function ProjectList({ user }) {
  
  
  return(
    <Container>
      {/* Map over associated projects */}
      <h3>Projects</h3>
      {/* {console.log("User projects: ", {user})}
        <div>
          {user.projects.length > 0 ? (
            user.projects.map((project) => (
              <Button variant="outline" as={ Link } to= {`/projects/${project.id}`} key={uuid()}>{project.proname}</Button>
            ))
          ) : (
          <div className="no-asset">
            <h2>No projects</h2>
          </div>
     )}
     </div> */}

  </Container>
    )
}

const Container = styled.div`
max-width: 800px;
display: flex;
flex-flow: row wrap;
gap: 40px;
`;
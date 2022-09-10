import React from "react"
import styled from "styled-components"
import Profile from "./Profile"
import ProjectList from "./ProjectList"

export default function User({ user, handleClick }) {

  return (
    <Container>
      <Profile handleClick={handleClick} />
      <ProjectList user={user} />
    </Container>
  )

}

const Container = styled.section`
  max-width: 800px;
  margin: 40px auto;`
  
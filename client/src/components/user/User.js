import React from "react"
import Profile from "./Profile"
import ProjectList from "./ProjectList"
import styled from "styled-components"

export default function User({ user }) {

  return (
    <Container>
      <Img src={"/images/profile-beach.jpg"} alt="Beach Image" />
      <Profile />
      <ProjectList user={user} />
    </Container>
  )
}

// Styled-Components CSS
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 60px auto;
`

const Img = styled.img`
  height: 350px;
  width: 600px;
  object-fit: cover;
`
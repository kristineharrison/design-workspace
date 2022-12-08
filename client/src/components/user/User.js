import React from "react"
import Profile from "./Profile"
import ProjectList from "./ProjectList"
import styled from "styled-components"

export default function User({ user }) {

  return (
    <div className="container">
      <Img src={"/images/profile-beach.jpg"} alt="Beach Image" />
      <Profile />
      <ProjectList user={user} />
    </div>
  )
}

// Styled-Components CSS
const Img = styled.img`
  height: 350px;
  width: 600px;
  object-fit: cover;
`
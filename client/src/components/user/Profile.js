import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"

export default function Profile()  {
  const [profile, setProfile] = useState("")
  
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setProfile)
  }, [])

  return (
    <Container>
      <h1>Hello, {profile.first_name}!</h1>
      <h2>What would you like to work on today?</h2>
      <Center>
        <ul>
          <li><a href="/new-asset">Add a new asset</a></li>
          <li><a href="/new-project">Start a new project</a></li>
          <li><a href="/unsplash">Search for a photo</a></li>
          <li><a href="/unsplash">Pick a new color scheme</a></li>
          <li><a href="/unsplash">Learn about CSS image styles</a></li>
        </ul>
      </Center>
    </Container>
  )
}

const Container = styled.section`  
  max-width: 80%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Center = styled.div`
  display: flex;
  justify-content: center;

  li {
    font-size: 1.25rem;
  }
`
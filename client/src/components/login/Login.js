import React from "react"
import { useState } from "react"
import styled from "styled-components"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import { Button } from "../ui"

export default function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <Container>
      <Logo>Workspace</Logo>
      <p><em>Productivity app to manage design projects &amp; related image assets</em></p>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Container>
  )
}

// Styled-Components CSS
const Container = styled.section`
  max-width: 400px;
  margin: 100px auto 0;
  padding: 16px;
`;

const Logo = styled.h1`
  font-family: 'Rubik Mono One', sans-serif;
  color: #254441;
  font-size: 2.75rem;
  line-height: 1;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`
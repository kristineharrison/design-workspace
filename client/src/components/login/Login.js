import React from "react";
import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "../ui";

export default function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      
      <Logo>Workspace</Logo>
      <p><em>Productivity app to manage design projects &amp; related image assets</em></p>

      <LoginContainer>
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
      </LoginContainer>
    </Container>
  );
}

const Logo = styled.h1`
  font-family: 'Rubik Mono One', sans-serif;
  color: #254441;
  font-size: 2.75rem;
  line-height: 1;
  margin: 8px 0 16px;
`;

const Container = styled.section`
  max-width: 400px;
  margin: 40px auto;
  padding: 16px;

  img {
    border-radius: 10px;
    width: 370px;
    margin-bottom: 15px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const LoginContainer = styled.div`
  margin-top: 80px;
  `
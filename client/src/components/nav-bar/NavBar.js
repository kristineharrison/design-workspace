import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../ui";

export default function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Workspace</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Asset
        </Button>
        <Button variant="outline" as={Link} to="/projects">
          Projects
        </Button>
        <Button variant="outline" as={Link} to="/user">
          Profile
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-between;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: 'Rubik Mono One', sans-serif;
  color: #254441;
  font-size: 2.75rem;
  margin: 0;
  line-height: 1;
  

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 30px;
`;

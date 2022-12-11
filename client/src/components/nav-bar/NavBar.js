import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Header>
      <Logo>
        <Link to="/profile">Workspace</Link>
      </Logo>
      <Nav>
        <div style={{ display: 'flex', 
                    justifyContent: 'flex-end',
                    width: 700, 
                    padding: 30,
                    gap: 10
        }}>
          {/* Dropdown Nav */}
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              Catalog
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/catalog">
                View All
              </Dropdown.Item>
              <Dropdown.Item href="/new-project">
                New Project
              </Dropdown.Item>
              <Dropdown.Item href="/new-asset">
                New Asset
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">
              Toolkit
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/colors">
                Colors
              </Dropdown.Item>
              <Dropdown.Item href="/images">
                Images
              </Dropdown.Item>
              <Dropdown.Item href="/unsplash">
                Photo Search
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Dropdown>
            <Dropdown.Toggle variant="success">
              {user.first_name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogoutClick}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Nav>
    </Header>
  );
}

const Header= styled.header`
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

  a:active {
    background-color: #075159;
  }
`;

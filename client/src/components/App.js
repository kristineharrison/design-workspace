import React, { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import NavBar from "./nav-bar"
import Login from "./login"
import User from "./user"
import Asset from "./asset"
import AssetCreateForm from "./asset/AssetCreateForm"
import Project from "./project"
import ProjectCreateForm from "./project/ProjectCreateForm"
import Catalog from "./catalog"
import Images from "./images"
import Colors from "./colors"
import Unsplash from "./images/Unsplash"
import Loading from "./login/Loading"

export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([])
  const [assets, setAssets] = useState([])
  const [error, setErrors] = useState(null)

  const history = useHistory()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  
  if (!user) return <Login onLogin={setUser} />
  // if (!user) return <Loading />

  function handleDeleteAsset(id) {
    fetch(`/assets/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setAssets((assets) =>
          assets.filter((asset) => asset.id !== id)
        )
      } else {
        r.json().then((err) =>
          setAssets({ data: null, error: err.error })
        )
      }
      setErrors([])
      history.push("/catalog")
    });
  }

  function handleDeleteProject(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProjects((projects) =>
          projects.filter((project) => project.id !== id)
        )
      } else {
        r.json().then((err) =>
          setProjects({ data: null, error: err.error })
        )
      }
      setErrors([])
      history.push("/catalog")
    })
  }
 
  return (
    <>
      <GlobalStyle />
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/assets/:id">
            <Asset handleDeleteAsset={handleDeleteAsset} user={user}/>
          </Route>
          <Route path="/assets">
            <Catalog/>
          </Route>
          <Route path="/catalog">
            <Catalog projects={projects} setProjects={setProjects} assets={assets} setAssets={setAssets}/>
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/new-asset">
            <AssetCreateForm />
          </Route>
          <Route path="/new-project">
            <ProjectCreateForm />
          </Route>
          <Route path="/profile">
            <User user={user}/>
          </Route>
          <Route path="/projects/:id">
            <Project handleDeleteProject={handleDeleteProject} user={user} />
          </Route>
          <Route path="/projects">
            <Catalog />
          </Route>
          <Route path="/unsplash">
            <Unsplash />
          </Route>
          <Route exact path="/">
            <User />
          </Route>
        </Switch>
      </main>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    padding: 30px;
  }
  
  h1,
  h2,
  h3 {
    color: #075159;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 8px 16px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  a:link {
    color: #075159;
    // font-size: 1.25rem;
  }

  a:visited {
    color: #05353A;
  }

  a:hover {
    color: #E53F16;
  }

  a:active {
    color: #0EA2B2;
  }

  ul {
    list-style: none;
  }
`;
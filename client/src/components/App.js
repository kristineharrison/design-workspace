import React, { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import GlobalStyle from "../globalStyle"
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

export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([])
  const [assets, setAssets] = useState([])
  const [error, setError] = useState(null)

  const history = useHistory()
  
  useEffect(() => {
    // Auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  
  // Check if user is authorized and if not return to login
  if (!user) return <Login onLogin={setUser} />

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
      setError([])
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
      setError([])
      history.push("/catalog")
    })
  }
 
  return (
    <>
      <GlobalStyle />
      <NavBar user={user} setUser={setUser} setError={setError} />
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
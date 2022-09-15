import React, { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
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
  const [status, setStatus] = useState()

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
          setAssets(null),
          setStatus("rejected")
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
          setAssets({ data: null, error: err.error, status: "rejected" })
        )
      }
      setErrors([])
      history.push("/catalog")
    })
  }
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;
 
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/assets/:id">
            <Asset handleDeleteAsset={handleDeleteAsset}/>
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
            <Project handleDeleteProject={handleDeleteProject} />
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
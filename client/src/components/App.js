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


export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([])
  const [assets, setAssets] = useState([])

  const history = useHistory()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function handleDeleteAsset(id) {
    fetch(`/assets/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setAssets((assets) =>
          assets.filter((asset) => asset.id !== id)
        );
      }
    });
    history.push("/catalog")
  }

  function handleDeleteProject(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProjects((projects) =>
          projects.filter((project) => project.id !== id)
        );
      }
    });
    history.push("/catalog")
  }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/assets/:id">
            <Asset handleDeleteAsset={handleDeleteAsset}/>
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
          <Route exact path="/">
            <User />
          </Route>
        </Switch>
      </main>
    </>
  );
}
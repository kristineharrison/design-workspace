import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
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
import Typography from "./typography"


export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/assets/:id">
            <Asset />
          </Route>
          <Route path="/catalog">
            <Catalog projects={projects} setProjects={setProjects}/>
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
            <User />
          </Route>
          <Route path="/projects/:id">
            <Project project={projects} setProject={setProjects} />
          </Route>
          <Route path="/typography">
            <Typography />
          </Route>
          <Route exact path="/">
            <User />
          </Route>
        </Switch>
      </main>
    </>
  );
}
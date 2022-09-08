import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./nav-bar"
import Login from "./login"
import User from "./user"
import Asset from "./catalog/asset/"
import AssetCreateForm from "./catalog/asset/AssetCreateForm"
import ProjectCreateForm from "./catalog/project/ProjectCreateForm"
import Catalog from "./catalog"
import Images from "./images"
import Colors from "./colors"
import Typography from "./typography"
import Project from "./catalog/project/"

export default function App() {
  const [user, setUser] = useState(null);
  const [assets, setAssets] = useState([])
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
  
  // convert Object into array so can filter
  const newArray = Object.values(assets)
  console.log(newArray)

  function onAssetDelete(id) {
    const updatedArray = newArray.filter((asset) => asset.id !== id);
    
    setAssets(updatedArray);
  }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/assets/:id">
            <Asset onAssetDelete={onAssetDelete} asset={assets} setAsset={setAssets}/>
          </Route>
          <Route path="/catalog">
            <Catalog assets={assets} setAssets={setAssets} projects={projects} setProjects={setProjects}/>
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
import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./nav-bar"
import Login from "./login"
import User from "./user"
import Asset from "./catalog/asset/Asset"
import AssetCreateForm from "./catalog/asset/AssetCreateForm"
import ProjectCreateForm from "./catalog/project"
import Catalog from "./catalog"

export default function App() {
  const [user, setUser] = useState(null);

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
            <Catalog />
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
          <Route exact path="/">
            <User />
          </Route>
        </Switch>
      </main>
    </>
  );
}
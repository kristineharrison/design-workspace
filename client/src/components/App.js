import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./nav-bar"
import Login from "./login"
import User from "./user"
// import AssetCreateForm from "./asset"
import Project from "./project"

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
          {/* <Route path="/new-asset">
            <AssetCreateForm user={user} />
          </Route> */}
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/user">
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
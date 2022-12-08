import React from "react"
import { useState, useEffect } from "react"

export default function Profile()  {
  const [profile, setProfile] = useState("")
  const [status, setStatus] = useState("pending")
  
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setProfile)
      .then(setStatus("resolved"))
  }, [])

  if (status === "pending") return <h1>Loading...</h1>

  return (
    <div className="container">
      <h1>Hello, {profile.first_name}!</h1>
      <h2>What would you like to work on today?</h2>
      <ul>
        <li><a href="/new-asset">Add a new asset</a></li>
        <li><a href="/new-project">Start a new project</a></li>
        <li><a href="/unsplash">Search for a photo</a></li>
        <li><a href="/colors">Pick a new color scheme</a></li>
        <li><a href="/images">Learn about CSS image styles</a></li>
      </ul>
    </div>
  )
}
import React from "react"
import { useState } from "react"
import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import { Error, FormField, Input, Label, Textarea } from "../ui"

export default function ProjectCreateForm() {
  const [ proname, setProName ] = useState("")
  const [ prostatus, setProStatus ] = useState("")
  const [ summary, setSummary ] = useState("")
  const [ errors, setErrors ] = useState([])
  const history = useHistory()
  
  // Create new project
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proname: proname,
        prostatus: prostatus,
        summary: summary,
      }),
      }).then((r) => {
      if (r.ok) {
        history.push("/catalog")
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  return (
    <div className="container">
      <h2>Create New Project</h2>
      
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Required"
            value={proname}
            onChange={(e) => setProName(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="status">Status</Label>
          <Input
            type="text"
            id="status"
            placeholder="Required"
            value={prostatus}
            onChange={(e) => setProStatus(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id="summary"
            rows="3"
            placeholder="Required"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </FormField>
        <FormField>
          <div>
            <Button variant="outline-secondary" type="submit">
            Submit Project
          </Button>
          </div>  
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    </div>
  );
}
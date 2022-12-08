import React, { useState } from "react"
import { FormField, Input, Label, Textarea } from "../ui"
import Button from 'react-bootstrap/Button'

export default function ProjectUpdateForm({ project, handleClick, handleUpdate })  {
  const [proname, setProName] = useState("")
  const [prostatus, setProStatus] = useState("")
  const [summary, setSummary] = useState("")

  // Update project
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proname: proname,
        prostatus: prostatus,
        summary: summary
      }),
    })
    .then((resp) => resp.json())
    .then(handleUpdate);
    handleClick();
  }

  return (
    <div className="container">
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
            <Button variant="outline-secondary" type="submit">
              Submit
            </Button>
        </FormField>
       </form>
    </div>
  )
}
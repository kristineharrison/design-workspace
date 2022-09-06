import React from "react";
import { useState } from "react";
import { Button, FormField, Input, Label, Textarea } from "../../ui"

export default function ProjectUpdateForm({ projectData, handleUpdate, handleClick })  {
  const[name, setName] = useState("");
  const[status, setStatus] = useState("");
  const[summary, setSummary] = useState("");

  // Update project
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/projects/${projectData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        status: status,
        summary: summary
      }),
    })
    .then((resp) => resp.json())
    .then(handleUpdate);
    handleClick();
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="title">Update Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Required"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="status">Update Status</Label>
            <Input
              type="text"
              id="status"
              placeholder="Required"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="summary">Update Summary</Label>
            <Textarea
              id="summary"
              rows="3"
              placeholder="Required"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </FormField>
          <FormField>
              <Button color="primary" type="submit">
                Submit
              </Button>
          </FormField>
        </form>
    </div>
  );
}

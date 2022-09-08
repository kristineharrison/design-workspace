import React from "react";
import { useState } from "react";
import { Button, FormField, Input, Label, Textarea } from "../../ui"

export default function ProjectUpdateForm({ project, setProject, handleClick })  {
  const[proname, setProName] = useState("");
  const[prostatus, setProStatus] = useState("");
  const[summary, setSummary] = useState("");

  // Update project
  function handleSubmit(e) {
    e.preventDefault();

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
    .then((data) => setProject(data));
    handleClick();
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="name">Update Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Required"
              value={proname}
              onChange={(e) => setProName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="status">Update Status</Label>
            <Input
              type="text"
              id="status"
              placeholder="Required"
              value={prostatus}
              onChange={(e) => setProStatus(e.target.value)}
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

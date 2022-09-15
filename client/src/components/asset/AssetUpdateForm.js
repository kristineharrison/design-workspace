import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { FormField, Input, Label, Textarea } from "../ui"
import Button from "react-bootstrap/esm/Button"

export default function AssetUpdateForm({ asset, handleClick, handleUpdate })  {
  const [description, setDescription] = useState("")
  const [source, setSource] = useState("")
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  
// Update asset
function handleSubmit(e) {
  e.preventDefault()
  fetch(`/assets/${asset.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      source: source,
      description: description,
      tags: tags
    }),
  })
  .then((resp) => resp.json())
  .then(handleUpdate);
  handleClick();
}

  return (
    <Container>
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="title">Update Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Required"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="source">Update Source</Label>
            <Input
              type="text"
              id="source"
              placeholder="Required"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Update Description</Label>
            <Textarea
              id="description"
              rows="3"
              placeholder="Required"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="source">Update Tags</Label>
            <Input
              type="text"
              id="tags"
              placeholder="Required"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </FormField>
          <FormField>
              <Button variant="outline-secondary" type="submit">
                Submit
              </Button>
          </FormField>
        </form>
    </Container>
  );
}

const Container = styled.div`
width: 50%;
`
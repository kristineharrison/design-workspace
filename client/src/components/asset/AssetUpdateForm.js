import React from "react";
import { useState } from "react";
import { Button, FormField, Input, Label, Textarea } from "../ui";

export default function AssetUpdateForm({ asset, setAsset, handleClick })  {
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/assets/${asset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        source: source,
        title: title,
        tags: tags
      }),
    })
    .then((resp) => resp.json())
    .then((data) => setAsset(data))
    
    handleClick();

}

  return (
    <div>
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
              <Button color="primary" type="submit">
                Submit
              </Button>
          </FormField>
        </form>
    </div>
  );
}

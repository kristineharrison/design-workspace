import React from "react";
import { useState } from "react";
import { Button, FormField, Input, Label, Textarea } from "../../ui";

export default function AssetUpdateForm({ asset, handleUpdate, handleClick })  {
  const[caption, setCaption] = useState("");
  const[source, setSource] = useState("");
  const[title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/assets/${asset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: caption,
        source: source,
        title: title
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
            <Label htmlFor="name">Update Source</Label>
            <Input
              type="text"
              id="source"
              placeholder="Required"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="caption">Update Caption</Label>
            <Textarea
              id="caption"
              rows="3"
              placeholder="Required"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
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

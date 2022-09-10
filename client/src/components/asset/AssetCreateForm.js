import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../ui";

export default function AssetCreateForm() {
  // const [data, setData] = useState({
  //   title: "",
  //   source: "",
  //   description: "",
  //   tags: "",
  // })
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState([]);
  const [imageData, setImageData] = useState(null)
  const [items, setItems] = useState([])
  const [value, setValue] = useState("Pick one")
  const [isLoading, setIsLoading] = useState(true)

  const history = useHistory();

  useEffect(() => {
  
    async function getProjects() {
      const response = await fetch("/projects");
      const projectData = await response.json();
      setItems(projectData.map((project) => ({ label: project.proname, value: project.proname, id: project.id }))
      );
      setIsLoading(false);
      }
    getProjects();
    console.log(items) 
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    
    formData.append('title', title)
    formData.append('source', source)
    formData.append('description', description)
    formData.append('tags', tags)
    formData.append('image_data', imageData)
    formData.append('project_id', value)
    console.log(formData)
    fetch("/assets", {
      method: "POST",
      body: formData,
      }).then((r) => {
      if (r.ok) {
        history.push("/catalog");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Asset</h2>
        <p>Upload an image file.</p>
        <form onSubmit={handleSubmit}>
          <Upload>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageData(e.target.files[0])}
            />
          </Upload>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Required"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="source">Source</Label>
            <Input
              type="text"
              id="source"
              placeholder="Required"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows="3"
              placeholder="Required"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="tags">Tags</Label>
            <Input
              type="text"
              id="tags"
              placeholder="Required"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="project">Select Project</Label>
            <select
              disabled={isLoading}
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)} >
              
              {items.map(({ label, value, id }) => (
                <option key={value} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </FormField>
  
          <FormField>
            <div>
              <Button color="primary" type="submit">
              Submit Asset
            </Button>
            </div>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import uuid from "react-uuid"

import styled from "styled-components";
import { Button, Error, FormField, Label} from "../ui";

export default function AddProject({ asset, onAddProject }) {
  const [value, setValue] = useState("Select Project")
  const [isLoading, setIsLoading] = useState(true)
  const [projectId, setProjectId] = useState("")
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([]);
 
  const history = useHistory()

  useEffect(() => {
    let unmounted = false
    async function getProjects() {
      const response = await fetch("/projects");
      const projectData = await response.json();
      if (!unmounted) {
        setProjects(projectData.map((project) => ({ label: project.proname, pro_id: project.id }))
      );}
      setIsLoading(false);
      }
    getProjects();
    return () => {
      unmounted = true;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      project_id: Number(value),
      asset_id: asset.id,
    }
    fetch("/project_assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      }).then((r) => {
      if (r.ok) {
        r.json().then((newProject) => {
          setProjectId("")
          setErrors([])
          onAddProject(...asset.projects, newProject)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <Container>
      <h2>Add to Project</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="project">Select Project</Label>
          <select
            disabled={isLoading}
            id="project"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)} >
              <option value="" defaultValue>Select Project</option>
              {projects.map(({ label, pro_id }) => (
                <option key={uuid()} value={pro_id}>
                  {label}
                </option>
            ))}
            {console.log("Select: ", {value})}
          </select>
        </FormField>
        <FormField>
          <div>
            <Button color="primary" type="submit">
            Submit
          </Button>
          </div>
        </FormField>
        {/* <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField> */}
      </form>   
    </Container>
  );
}

const Container = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
`;

const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`
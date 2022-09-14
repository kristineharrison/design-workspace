import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components";
import { Error, FormField } from "../ui";
import Button from 'react-bootstrap/Button'
import uuid from "react-uuid"

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
      project_id: value,
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
          console.log("After ",newProject)
          setProjectId("")
          onAddProject(...asset.projects, newProject)
          setErrors([])
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <Container>
      <h3>Add to Project</h3>
      <form onSubmit={handleSubmit}>
        <FormField>
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
          </select>
        </FormField>
        <FormField>
          <div>
            <Button variant="outline-secondary" type="submit">
              Submit
            </Button>
          </div>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>   
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
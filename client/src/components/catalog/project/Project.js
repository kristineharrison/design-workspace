import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../../ui"
import ProjectUpdateForm from "./ProjectUpdateForm"

export default function Project({ handleUpdate }) {
  const [project, setProject] = useState([])
  const [showForm, setShowForm] = useState(false);
  
  const history = useHistory();
  const params = useParams()

  // Get project data
  useEffect(() => {
    fetch(`/projects/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setProject(data);
      });
  }, [params.id]);

  const { name, status, summary, id } = project

  function handleDelete(id) {
    fetch(`/assets/${params.id}`, {
      method: "DELETE",
    });
    // onProjectDelete(id);
    history.push("/catalog");
  }

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }
  
  
  return (
    <Container>
          hello
          <h2>{name}</h2>
          <p>{status}</p> 
          <p>{summary}</p>
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(id)}>Update</Button>
          </div>
          {showForm ? <ProjectUpdateForm project={project} setProject={setProject} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      
    </Container>
  );
}

const Container = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../../ui";

export default function ProjectCreateForm() {
  const [proname, setProName] = useState("");
  const [prostatus, setProStatus] = useState("");
  const [summary, setSummary] = useState("");
  const [errors, setErrors] = useState([]);
  // const [imageData, setImageData] = useState(null)
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('proname', proname)
    formData.append('prostatus', prostatus)
    formData.append('summary', summary)
    // formData.append('image_data', imageData)
 
    fetch("/projects", {
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
        <h2>Create Project</h2>
        {/* <p>Upload an image or logo file.</p> */}
        <form onSubmit={handleSubmit}>
          {/* <Upload>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageData(e.target.files[0])}
            />
          </Upload> */}
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
            <div>
              <Button color="primary" type="submit">
              Submit Project
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
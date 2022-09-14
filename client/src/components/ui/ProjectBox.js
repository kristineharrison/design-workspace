import styled from "styled-components";

const ProjectBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  
  button {
    width: 60%;
  }

  div.update-button {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 10px;
  }
`;

export default ProjectBox;
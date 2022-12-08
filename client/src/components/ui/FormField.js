import styled from "styled-components";

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
  width: 450px;
`;

export default FormField;
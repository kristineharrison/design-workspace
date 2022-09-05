import styled from "styled-components";

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  display: flex;
  flex-flow: column;
  align-items: flex-start;

`;

export default FormField;

import styled from "styled-components";

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  display: flex;
  flex-flow: column;
  justify-content: center;

  div {
    margin: 0 auto;
  }
`;

export default FormField;

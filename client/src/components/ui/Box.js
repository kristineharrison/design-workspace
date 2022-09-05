import styled from "styled-components";


const Box = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  button {
    width: 60%;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  img {
    max-height: 300px;
  }

  div.update-button {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 10px;
  }
`;

export default Box;
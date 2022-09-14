import styled from "styled-components";

const AssetBox = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span {
    color: #075159;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }

  div.update-button {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 10px;
  }
`;

export default AssetBox;
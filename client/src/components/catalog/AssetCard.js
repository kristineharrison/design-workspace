import React from "react";
import { AssetBox, Button } from "../ui";
import styled from "styled-components";
import { Link } from "react-router-dom"

export default function AssetCard({ asset }) {

  return (
    <Container>
      <AssetBox>
          <img src={asset.image_data} alt={asset.title}/>
          <p>
            <span>{asset.title}</span><br />
          </p> 
          <div className="update-button">
            <Button as={ Link } to= {`/assets/${asset.id}`}>View Asset</Button>
          </div>
      </AssetBox>
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
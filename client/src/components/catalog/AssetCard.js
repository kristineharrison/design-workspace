import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import styled from "styled-components"

export default function AssetCard({ asset }) {

  return (
    <AssetBox> 
      {/* Display uploaded image or linked image from Unsplash */}
      {asset.image_url ? <img src={asset.image_url} alt={asset.title}/> : <img src={asset.image_data} alt={asset.title}/>}
      <p><span>{asset.title}</span><br /></p> 
      <Button variant="outline-secondary" as={ Link } to= {`/assets/${asset.id}`}>
        VIEW ASSET
      </Button>
    </AssetBox>
  )
}

// // Style-Components CSS
const AssetBox = styled.div`
  width: 250px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 15px;

  span {
    color: #075159;
    font-size: 1em;
    font-weight: 600;
  }
  
  img {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`;
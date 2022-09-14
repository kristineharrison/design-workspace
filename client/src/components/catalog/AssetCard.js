import React from "react"
import { Link } from "react-router-dom"
import { AssetBox } from "../ui"
import Button from 'react-bootstrap/Button'

export default function AssetCard({ asset }) {

  return (
    <AssetBox> 
      {asset.image_url ? <img src={asset.image_url} alt={asset.title}/> : <img src={asset.image_data} alt={asset.title}/>}
      <p><span>{asset.title}</span><br /></p> 
      <Button variant="outline-secondary" as={ Link } to= {`/assets/${asset.id}`}>
        View Asset
      </Button>
    </AssetBox>
  )
}
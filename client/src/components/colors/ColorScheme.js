import React from "react";
import { useParams } from "react-router-dom"

export default function ColorScheme({ schemes }) {
  const params = useParams()

  return (
    <div>
      <h3>{schemes[params.schemeId].title}</h3>
    </div>
  );
}

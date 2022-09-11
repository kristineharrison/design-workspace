// .src/components/MovieShow.js
import React from "react";
import { useParams } from "react-router-dom";

export default function StyleDisplay({ styles }) {
  // call useParams to access the `params` from the url
  const params = useParams();

  return (
    <div>
      <h3>{styles[params.styleId].title}</h3>
    </div>
  );
}

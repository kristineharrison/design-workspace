import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    padding: 30px;
  }
  
  h1,
  h2,
  h3 {
    color: #075159;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 8px 16px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  a:link {
    color: #075159;
    // font-size: 1.25rem;
  }

  a:visited {
    color: #05353A;
  }

  a:hover {
    color: #E53F16;
  }

  a:active {
    color: #0EA2B2;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1.25rem;
  }

  .container {
    // background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .asset {
  height: 500px;
  width: 800px;
  object-fit: contain;
  }
`

export default GlobalStyle;
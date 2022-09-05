import React from "react";
import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#254441",
    "--accent": "white",
  },
  secondary: {
    "--main": "#47B896",
    "--accent": "white",
  },
};

export default function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.5;
  }

`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsla(55, 13%, 78%, 1);
  }
`;

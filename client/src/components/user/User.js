import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

export default function User( handleClick ) {

  return (
    <Wrapper>
      <Profile handleClick={handleClick}/>
    </Wrapper>
  )

}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;`
  
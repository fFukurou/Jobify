import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className="content">some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: red;
  h1 {
    color: white;
  }
  .content {
    background: blue;
    color: yellow;
  }
`;

export default Landing;

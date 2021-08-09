import React from "react";
import styled from "styled-components";
import EmpAside from "../../EmpAside";

const EmpProject = () => {
  return (
    <TrackingContainer>
      <EmpAside />
      <Tracking>
        <h1>Employee Tracking Management</h1>
      </Tracking>
    </TrackingContainer>
  );
};

const TrackingContainer = styled.div`
  display: flex;
`;

const Tracking = styled.div`
  width: 80%;

  & h1 {
    padding: 1.5rem 4rem;
    background: #1a2238;
    color: #fff;
    font-weight: bold;
  }
`;

export default EmpProject;

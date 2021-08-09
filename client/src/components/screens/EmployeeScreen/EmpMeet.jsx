import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import EmpAside from "../../EmpAside";

const EmpMeet = () => {
  return (
    <MeetContainer>
      <EmpAside />
      <Meet>
        <h1>Employee Meet Application</h1>
        <Row className="row1">
          <Col>
            <h2>On Going Meet</h2>
            <Button variant="danger">Meet 1</Button>
          </Col>
          <Col>
            <h2>Create Meet</h2>
            <a
              href="https://radiant-basin-25890.herokuapp.com/f438a638-86ab-473a-929e-ad08d1af51af"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="success">Click Here</Button>
            </a>
          </Col>
        </Row>
      </Meet>
    </MeetContainer>
  );
};

const MeetContainer = styled.div`
  display: flex;
`;

const Meet = styled.div`
  width: 80%;
  background: linear-gradient(-45deg, #fe0847, #feae3f);

  h1 {
    padding: 1.5rem 4rem;
    background: #1a2238;
    color: #fff;
    font-weight: bold;
  }

  & .row {
    margin: 2rem 2rem;
  }
`;

export default EmpMeet;

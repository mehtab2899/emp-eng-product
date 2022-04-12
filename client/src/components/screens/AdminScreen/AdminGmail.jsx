import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import AdminAside from "../../AdminAside";
import { GmailData } from "../../../data/GmailData";

const AdminGmail = () => {
  return (
    <GmailContainer>
      <AdminAside />
      <Gmail>
        <div className="header">
          <h1>Employee Gmail Inbox</h1>
          <h3>alex123@gmail.com</h3>
        </div>
        <div className="gmails">
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>From</th>
                <th>Subject</th>
                <th>Time</th>
                <th>Reply</th>
              </tr>
            </thead>
            <tbody>
              {GmailData.map((gmail, index) => (
                <tr key={index}>
                  <td>{gmail.from}</td>
                  <td>{gmail.subject}</td>
                  <td>{gmail.time}</td>
                  <td>
                    <a href="/">
                      <i className="fas fa-reply"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Gmail>
    </GmailContainer>
  );
};

const GmailContainer = styled.div`
  display: flex;
`;

const Gmail = styled.div`
  width: 80%;

  & .header {
    display: flex;
    justify-content: space-between;

    h1,
    h3 {
      padding: 1rem 0.5rem;
      background: #1a2238;
      color: #fff;
      font-weight: bold;
    }
  }

  & .gmails {
    font-size: 2rem;
  }
`;

export default AdminGmail;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AdminAside from "../../AdminAside";

const AdminChat = () => {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  return (
    <ChatContainer>
      <AdminAside />
      <Chat>
        <h1>Admin Chat Application</h1>
        <ChatCord>
          <div className="join-container">
            <main className="join-main">
              <form>
                <div className="form-control">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username..."
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="room">Projects</label>
                  <select
                    onChange={(e) => setProject(e.target.value)}
                    name="room"
                    id="room"
                  >
                    <option value="select project">Select Project</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                    <option value="C#">C#</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Java">Java</option>
                  </select>
                </div>
                <Link
                  onClick={(e) =>
                    !name || !project ? e.preventDefault() : null
                  }
                  to={`/chat?name=${name}&project=${project}`}
                  type="submit"
                >
                  <button type="submit" className="btn">
                    Join Chat
                  </button>
                </Link>
              </form>
            </main>
          </div>
        </ChatCord>
      </Chat>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
`;

const Chat = styled.div`
  width: 80%;

  & h1 {
    padding: 1.5rem 4rem;
    background: #1a2238;
    color: #fff;
    font-weight: bold;
  }
`;

const ChatCord = styled.div`
  .join-container {
    max-width: 60rem;
    margin: 8rem auto;
    color: #fff;
  }

  .join-main {
    padding: 3rem 4rem;
    background: #1a2238;
  }

  .join-main p {
    margin-bottom: 2rem;
  }

  .join-main .form-control {
    margin-bottom: 2rem;
    background: #1a2238;
    border: none;
    color: #fff;
  }

  .join-main label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  .join-main input[type="text"] {
    font-size: 1.6rem;
    padding: 0.5rem;
    height: 4rem;
    width: 100%;
  }

  .join-main select {
    font-size: 1.6rem;
    padding: 0.5rem;
    height: 4rem;
    width: 100%;
  }

  .join-main .btn {
    margin-top: 2rem;
    width: 100%;
    background: #445277;
    color: #fff;
  }

  @media (max-width: 700px) {
    .chat-main {
      display: block;
    }

    .chat-sidebar {
      display: none;
    }
  }
`;
export default AdminChat;

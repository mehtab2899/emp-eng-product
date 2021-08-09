import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import JS from "../JS/date&time";
import { logout } from "../actions/employeeActions";
import moment from "moment";

const EmpAside = () => {
  const dispatch = useDispatch();

  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  let time = moment().format("h:mm a");

  return (
    <AsideContainer>
      <div className="top">
        <img src="/images/p1.jpg" alt="profile-pic" />
        <h2>
          {employeeInfo?.employeeID}
          <br /> <span>Developer</span>
        </h2>
      </div>
      <div className="middle">
        <div className="time">
          {JS.dateTime()}
          {time}
        </div>
        <div className="board">
          <Link to="/employee-dashboard" className="board">
            <i className="fas fa-border-all"></i>Dashboard
          </Link>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Link className="link" to="/feedback">
              <i className="fas fa-comment-alt"></i>Feedback
            </Link>
          </li>
          <li>
            <Link className="link" to="/support">
              <i className="fas fa-question-circle"></i>Support
            </Link>
          </li>
          <li>
            <Link className="link" to="/employee" onClick={logoutHandler}>
              <i className="fas fa-sign-out-alt"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  background: #1f2841;
  color: #fff;
  font-weight: bold;
  width: 20%;
  height: 100vh;
  position: relative;
  border-right: 2px solid #000;
  padding: 0 1rem;

  & .top {
    display: flex;
    padding-top: 2rem;

    & img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 2rem;
    }

    & h2 {
      font-weight: bold;

      & span {
        font-size: 1.2rem;
        font-weight: normal;
      }
    }
  }

  & .middle {
    margin-top: 3rem;

    & .time {
      font-size: 2.5rem;
    }

    & .board {
      margin-top: 10rem;
      font-size: 2.5rem;
      color: #fff;

      & i {
        margin-right: 1rem;
      }
    }
  }

  & .bottom {
    position: absolute;
    bottom: 0;

    & ul {
      list-style: none;

      & li {
        & .link {
          text-decoration: none;
          color: #fff;
        }

        & i {
          margin-right: 1rem;
        }

        font-size: 2rem;
        margin: 1rem 0;
      }
    }
  }
`;

export default EmpAside;

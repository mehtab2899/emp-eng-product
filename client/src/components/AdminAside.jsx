import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import JS from "../JS/date&time";
import { logout } from "../actions/adminActions";

const AdminAside = () => {
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  let time = moment().format("h:mm a");

  return (
    <AsideContainer>
      <div className="top">
        <img src="/images/p1.jpg" alt="profile-pic" />
        <h2>
          {adminInfo?.adminID}
          <br /> <span>Project Manager</span>
        </h2>
      </div>
      <div className="middle">
        <div className="time">
          {JS.dateTime()}
          {time}
        </div>
        <div className="board">
          <Link to="/admin-dashboard" className="board">
            <i class="fas fa-border-all"></i>Dashboard
          </Link>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Link className="link" to="/feedback">
              <i class="fas fa-comment-alt"></i>Feedback
            </Link>
          </li>
          <li>
            <Link className="link" to="/support">
              <i class="fas fa-question-circle"></i>Support
            </Link>
          </li>
          <li>
            <Link className="link" to="/admin" onClick={logoutHandler}>
              <i class="fas fa-sign-out-alt"></i>Logout
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
  height: 100vh;
  width: 25%;
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
      font-size: 3rem;
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

export default AdminAside;

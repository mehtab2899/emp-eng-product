import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./scss/SignIn.scss";
import { login } from "../actions/adminActions";
import Message from "./Message";

const SignIn = () => {
  const location = useLocation();
  const history = useHistory();

  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { error, adminInfo } = adminLogin;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/admin-dashboard";

  useEffect(() => {
    if (adminInfo) {
      history.push(redirect);
    }
  }, [history, adminInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(adminID, password));
  };

  return (
    <>
      {error && <Message variant="danger">{error}</Message>}
      <div className="signin">
        <h1>SignIn</h1>
        <p>Login to your account</p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
            placeholder="Admin ID"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <Link to="/forgot">Forgot your password?</Link>
          <button type="submit">SignIn</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./scss/SignUp.scss";
import { register } from "../actions/adminActions";
import Message from "./Message";

const SignUp = () => {
  const location = useLocation();
  const history = useHistory();

  const [orgName, setOrgName] = useState("");
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const adminRegister = useSelector((state) => state.adminRegister);
  const { error, adminInfo } = adminRegister;

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
    dispatch(register(orgName, adminID, password));
  };

  return (
    <>
      {error && <Message variant="danger">{error}</Message>}

      <div className="signup">
        <h1>SignUp</h1>
        <p>Create your account</p>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
            placeholder="Admin ID"
            required
          />
          <input
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            placeholder="Organisation Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

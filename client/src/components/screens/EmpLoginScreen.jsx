import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../scss/mixins/Employee.scss";
import "../scss/SignIn.scss";
import { login } from "../../actions/employeeActions";
import Message from "../Message";
import Header from "../Header";
import Footer from "../Footer";

const EmpLoginScreen = () => {
	const location = useLocation();
	const history = useHistory();

	const [employeeID, setEmployeeID] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const employeeLogin = useSelector((state) => state.employeeLogin);
	const { error, employeeInfo } = employeeLogin;

	const redirect = location.search
		? location.search.split("=")[1]
		: "/employee-dashboard";

	useEffect(() => {
		if (employeeInfo) {
			history.push(redirect);
		}
	}, [history, employeeInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(employeeID, password));
	};

	return (
		<>
			<Header />
			<div className="employee">
				<div className="signin">
					{error && <Message variant="danger">{error}</Message>}

					<h1>SignIn</h1>
					<p>Login to your account</p>
					<form onSubmit={submitHandler}>
						<input
							type="text"
							value={employeeID}
							onChange={(e) => setEmployeeID(e.target.value)}
							placeholder="Employee ID"
							required
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="password"
							required
						/>

						<Link to="/forgot">Forgot your password?</Link>
						<button type="submit">SignIn</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default EmpLoginScreen;

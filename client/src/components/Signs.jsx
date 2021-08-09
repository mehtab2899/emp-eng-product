import React from "react";
import { NavLink } from "react-router-dom";
import "./scss/Signs.scss";

const Signs = () => {
	return (
		<div className="signs">
			<h1>Choose one of the option</h1>
			<div className="signs__btns">
				<NavLink className="signs__btns--links" to="/admin">
					Admin
				</NavLink>
				<NavLink className="signs__btns--links" to="/employee">
					Employee
				</NavLink>
			</div>
		</div>
	);
};

export default Signs;

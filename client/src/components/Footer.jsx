import React from "react";
import "./scss/Footer.scss";

const Footer = () => {
	var date = new Date().getFullYear();

	return (
		<div className="footer">
			<h1>Employee Engagement</h1>
			<h2>Change for betterment</h2>
			<p>
				&copy; {date} by
				<img src="/images/apple-touch-icon.png" alt="logo" />
			</p>
		</div>
	);
};

export default Footer;

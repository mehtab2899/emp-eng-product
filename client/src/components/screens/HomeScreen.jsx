import React from "react";
import Home from "../Home";
import About from "../About";
import Features from "../Features";
import Pricing from "../Pricing";
import Header from "../Header";
import Footer from "../Footer";

const HomeScreen = () => {
	return (
		<div>
			{/* header */}
			<Header />

			{/* home */}
			<Home />

			{/* about */}
			<About />

			{/* features */}
			<Features />

			{/* pricing */}
			<Pricing />

			<Footer />
		</div>
	);
};

export default HomeScreen;

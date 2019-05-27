import React from "react";
import { Route } from "react-router-dom";
import NavBar from "components/NavBar";

const Root = props => {
	const navBarProps = {
		current: props.location.pathname,
		mainItem: { to: "/", label: "Boilerplate", main: true },
		leftItems: [
			{ to: "/home", label: "Home" },
			{ to: "/about", label: "About" }
		],
		rightItems: [{ to: "/login", label: "Login" }]
	};
	return (
		<React.Fragment>
			<NavBar {...navBarProps} />
		</React.Fragment>
	);
};

export default Root;

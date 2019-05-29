import React from "react";
import { NavBar } from "components/UI";

const AppNavBar = ({ current }) => {
	const navBarProps = {
		current: current,
		mainItem: { to: "/", label: "Boilerplate", main: true },
		leftItems: [
			{ to: "/about", label: "About" },
			{ to: "/counter", label: "Counter" }
		],
		rightItems: [{ to: "/login", label: "Login" }]
	};
	return <NavBar {...navBarProps} />;
};

export default AppNavBar;

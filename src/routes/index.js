import React from "react";
import { Switch, Route } from "react-router-dom";
import { Heading } from "pcln-design-system";
import NavBar from "components/NavBar";
import AppContainer from "components/App/Container";
import About from "./about";
import Reducer from "./reducer";
import Login from "./login";
import NotFound from "components/NotFound";

const Root = props => {
	const navBarProps = {
		current: props.location.pathname,
		mainItem: { to: "/", label: "Boilerplate", main: true },
		leftItems: [
			{ to: "/about", label: "About" },
			{ to: "/reducer", label: "Reducer" }
		],
		rightItems: [{ to: "/login", label: "Login" }]
	};
	return (
		<React.Fragment>
			<NavBar {...navBarProps} />
			<AppContainer>
				<Switch>
					<Route
						path="/"
						exact
						render={() => <Heading color="white">Home</Heading>}
					/>
					<Route path="/about" component={About} />
					<Route path="/reducer" component={Reducer} />
					<Route path="/login" component={Login} />
					<Route path="" component={NotFound} />
				</Switch>
			</AppContainer>
		</React.Fragment>
	);
};

export default Root;

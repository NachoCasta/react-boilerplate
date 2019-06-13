import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "pcln-design-system";
import ReduxProvider from "./Redux";

const history = createBrowserHistory();

const Providers = ({ children }) => (
	<Router history={history}>
		<ThemeProvider>
			<ReduxProvider>{children}</ReduxProvider>
		</ThemeProvider>
	</Router>
);

export default Providers;

import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "pcln-design-system";

const history = createBrowserHistory();

const Providers = ({ children }) => (
	<Router history={history}>
		<ThemeProvider>{children}</ThemeProvider>
	</Router>
);

export default Providers;

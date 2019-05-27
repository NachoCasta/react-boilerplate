import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "pcln-design-system";
import ReducerProvider from "./Reducer";

const history = createBrowserHistory();

const Providers = ({ children }) => (
	<Router history={history}>
		<ThemeProvider>
			<ReducerProvider>{children}</ReducerProvider>
		</ThemeProvider>
	</Router>
);

export default Providers;

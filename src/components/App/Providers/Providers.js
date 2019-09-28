import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "pcln-design-system";
import ReduxProvider from "./Redux";
import { history } from "utils";

const Providers = ({ children }) => (
    <Router history={history}>
        <ThemeProvider>
            <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
    </Router>
);

export default Providers;

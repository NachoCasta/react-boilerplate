import React from "react";
import { Route } from "react-router-dom";
import Providers from "../Providers";
import Root from "routes";

function App() {
	return (
		<Providers>
			<Route path="/" component={Root} />
		</Providers>
	);
}

export default App;

import React from "react";
import ComponentView from "./ComponentView";
import { useStore, useActions } from "utils";

const Component = props => {
	// const state = useStore(state => state.component);
	// const actions = useActions(actions => actions.component);
	return <ComponentView />;
};

export default Component;

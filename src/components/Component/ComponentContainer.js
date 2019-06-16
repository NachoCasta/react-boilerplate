import React from "react";
import ComponentView from "./ComponentView";
import { useSelector, useActions } from "utils";

const Component = props => {
	// const state = useSelector(state => state.component);
	// const actions = useActions(actions => actions.component);
	return <ComponentView />;
};

export default Component;

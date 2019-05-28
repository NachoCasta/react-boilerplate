import React from "react";
import ReducerDemoView from "./ReducerDemoView";
import { useAppState, useAppActions } from "utils";

const Reducer = props => {
	const { demo: state } = useAppState();
	const { demo: actions } = useAppActions();
	return (
		<ReducerDemoView
			onIncrement={actions.increment}
			onDecrement={actions.decrement}
			counter={state}
		/>
	);
};

export default Reducer;

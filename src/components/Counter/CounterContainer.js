import React from "react";
import CounterView from "./CounterView";
import { useAppState, useAppActions } from "utils";

const Counter = props => {
	const counter = useAppState(state => state.counter);
	const actions = useAppActions(actions => actions.counter);
	return (
		<CounterView
			onIncrement={actions.increment}
			onDecrement={actions.decrement}
			counter={counter}
		/>
	);
};

export default Counter;

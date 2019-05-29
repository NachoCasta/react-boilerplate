import React from "react";
import CounterView from "./CounterView";
import { useStore, useActions } from "utils";

const Counter = props => {
	const counter = useStore(state => state.counter);
	const actions = useActions(actions => actions.counter);
	return (
		<CounterView
			onIncrement={actions.increment}
			onDecrement={actions.decrement}
			counter={counter}
		/>
	);
};

export default Counter;

import React from "react";
import CounterView from "./CounterView";
import { useSelector, useActions } from "utils";

const Counter = props => {
	const counter = useSelector(state => state.counter);
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

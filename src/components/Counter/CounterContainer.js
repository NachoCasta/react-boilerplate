import React from "react";
import CounterView from "./CounterView";
import {
	useSelector,
	useActions,
	useFirebaseState,
	getDatabaseRef
} from "utils";

const Counter = props => {
	const counter = useSelector(state => state.counter);
	const { setCounter } = useActions(actions => actions.counter);
	const [loading] = useFirebaseState(
		getDatabaseRef("counter"),
		counter,
		setCounter
	);
	return (
		<CounterView
			onIncrement={() => setCounter(counter + 1)}
			onDecrement={() => setCounter(counter - 1)}
			counter={counter}
			loading={loading}
		/>
	);
};

export default Counter;

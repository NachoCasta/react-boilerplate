import React from "react";
import CounterView from "./CounterView";
import {
	useSelector,
	useActions,
	useFirebaseState,
	useSpringInitializer
} from "utils";

const Counter = props => {
	const counter = useSelector(state => state.counter);
	const { setCounter } = useActions(actions => actions.counter);
	const [loading] = useFirebaseState("counter", counter, value =>
		setCounter(value, false)
	);
	const animatedCounter = useSpringInitializer(counter, loading);
	return (
		<CounterView
			onIncrement={() => setCounter(counter + 1)}
			onDecrement={() => setCounter(counter - 1)}
			counter={animatedCounter}
			loading={loading}
		/>
	);
};

export default Counter;

import { useState } from "react";
import { useSpring } from "react-spring";

export default (counter, loading) => {
	const [first, setFirst] = useState(true);
	const counterSpring = useSpring({
		number: counter,
		from: { number: 0 },
		config: { duration: 1000 },
		onRest: () => !loading && setFirst(false),
		immediate: !first
	});
	return counterSpring.number.interpolate(val => Math.floor(val));
};

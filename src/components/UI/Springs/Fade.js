import React from "react";
import { useSpring, animated } from "react-spring";

const Fade = ({ delay, duration, children }) => {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration },
		delay
	});
	return <animated.div style={props}>{children}</animated.div>;
};

Fade.defaultProps = {
	delay: 0,
	duration: 500
};

export default Fade;

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Fade from "./Fade";

const Expand = ({ children, open, height }) => {
	const [reset, setReset] = useState(false);
	useEffect(() => {
		setReset(true);
	}, [open]);
	const props = useSpring({
		from: { height: 0 },
		to: { height },
		config: { duration: 150 },
		reset,
		reverse: !open,
		onRest: () => setReset(false)
	});
	return (
		<animated.div style={props}>
			{open && (
				<Fade delay={50} duration={100}>
					{children}
				</Fade>
			)}
		</animated.div>
	);
};

export default Expand;

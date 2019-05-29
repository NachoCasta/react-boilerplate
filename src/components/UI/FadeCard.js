import React from "react";
import Card from "./Card";
import { Fade } from "./Springs";

const FadeCard = ({ children, ...rest }) => {
	return (
		<Fade>
			<Card {...rest}>{children}</Card>
		</Fade>
	);
};

export default FadeCard;

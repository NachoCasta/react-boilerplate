import React from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";

const FadeCard = ({ children, ...rest }) => (
	<Fade>
		<Card {...rest}>{children}</Card>
	</Fade>
);

export default FadeCard;

import React from "react";
import { Card } from "pcln-design-system";

const MyCard = ({ children, ...rest }) => (
	<Card
		boxShadowSize="xl"
		borderWidth={0}
		borderRadius={1}
		p={2}
		bg="white"
		{...rest}
	>
		{children}
	</Card>
);

export default MyCard;

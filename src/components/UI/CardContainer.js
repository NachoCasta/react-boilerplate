import React from "react";
import { Flex, Box, FadeCard } from "./";

const CardContainer = ({ width, children, ...rest }) => (
	<Flex justifyContent="center">
		<Box width={width}>
			<FadeCard>{children}</FadeCard>
		</Box>
	</Flex>
);

export default CardContainer;

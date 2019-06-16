import React from "react";
import { Flex, Box } from "components/UI";

const List = ({ children }) => (
	<Flex>
		{children.map((child, i) => (
			<Box p={1} key={i} width={1}>
				{child}
			</Box>
		))}
	</Flex>
);

export default List;

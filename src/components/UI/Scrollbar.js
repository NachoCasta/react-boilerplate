import React from "react";
import Flex from "./Flex";
import Box from "./Box";
import Scrollbar from "react-scrollbars-custom";

export default ({ width, height, children, ...rest }) => (
	<Flex>
		<Box width={width} height={height}>
			<Scrollbar style={{ height: "100%" }} {...rest}>
				{children}
			</Scrollbar>
		</Box>
	</Flex>
);

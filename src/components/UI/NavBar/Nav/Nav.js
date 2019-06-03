import React from "react";
import { Container, Flex, Box } from "pcln-design-system";

const Nav = ({ children, ...rest }) => (
	<Box bg="black" color="white">
		<Container maxWidth={1280}>
			<Flex>{children}</Flex>
		</Container>
	</Box>
);

export default Nav;

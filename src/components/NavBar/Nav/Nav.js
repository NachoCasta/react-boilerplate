import React from "react";
import { Container, Flex, Box } from "pcln-design-system";

const Nav = ({ children }) => (
	<Box bg="darkGray" color="white">
		<Container maxWidth={1280}>
			<Flex>{children}</Flex>
		</Container>
	</Box>
);

export default Nav;

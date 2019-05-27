import React from "react";
import { Container, Flex, Box } from "pcln-design-system";

const AppContainer = ({ children }) => (
	<Container maxWidth={1280}>
		<Flex p={3}>
			<Box width={1}>{children}</Box>
		</Flex>
	</Container>
);

export default AppContainer;

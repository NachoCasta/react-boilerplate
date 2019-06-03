import React from "react";
import { Container, GradientBackgroundImage, Flex, Box } from "components/UI";

const AppContainer = ({ children }) => (
	<GradientBackgroundImage
		image="https://johnosler.files.wordpress.com/2017/07/pexels-photo.jpg"
		height={550}
		gradientHeight="50%"
		from="rgba(0, 0, 0, 0)"
		to="#000000"
	>
		<Container maxWidth={1280}>
			<Flex p={[2, 3]}>
				<Box width={1}>{children}</Box>
			</Flex>
		</Container>
	</GradientBackgroundImage>
);

export default AppContainer;

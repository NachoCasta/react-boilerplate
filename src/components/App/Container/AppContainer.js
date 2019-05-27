import React from "react";
import { Container, BackgroundImage } from "pcln-design-system";
import { Flex, Box, Gradient } from "components/UI";

const AppContainer = ({ children }) => (
	<Gradient>
		<BackgroundImage
			image="https://johnosler.files.wordpress.com/2017/07/pexels-photo.jpg"
			height={500}
		>
			<Container maxWidth={1280}>
				<Flex p={[2, 3]}>
					<Box width={1}>{children}</Box>
				</Flex>
			</Container>
		</BackgroundImage>
	</Gradient>
);

export default AppContainer;

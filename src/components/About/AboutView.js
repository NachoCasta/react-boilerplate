import React from "react";
import { CardContainer, Heading, Divider, Link, List } from "components/UI";

const About = ({}) => (
	<CardContainer p={[2, 3, 4]} width={1}>
		<Heading.h1 textAlign="center">About this boilerplate</Heading.h1>
		<Divider />
		<Heading.h2>Useful Links</Heading.h2>
		<List>
			<Link href="https://styled-system.com/table/">Styled System</Link>
			<Link href="https://pricelinelabs.github.io/design-system/iconography/">
				Priceline Design
			</Link>
			<Link href="https://www.react-spring.io/">React Spring</Link>
			<Link href="https://github.com/dvtng/react-loading-skeleton">
				React Loading Skeleton
			</Link>
			<Link href="https://github.com/airbnb/enzyme">Enzyme</Link>
		</List>
	</CardContainer>
);

export default About;

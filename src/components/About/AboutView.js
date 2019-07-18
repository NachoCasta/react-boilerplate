import React from "react";
import { CardContainer, Heading, Link, List } from "components/UI";

const About = () => (
	<CardContainer
		title={<Heading textAlign="center">About this boilerplate</Heading>}
		width={1}
	>
		<Heading.h3>Useful Links</Heading.h3>
		<List>
			<Link href="https://styled-system.com/table">Styled System</Link>
			<Link href="https://ant.design/docs/react/introduce">
				Ant Design
			</Link>
			<Link href="https://pricelinelabs.github.io/design-system">
				Priceline Design
			</Link>
			<Link href="https://octicons.github.com/">Octicons</Link>
			<Link href="https://www.react-spinners.com/">React Spinners</Link>
			<Link href="https://www.react-spring.io/">React Spring</Link>
			<Link href="https://github.com/dvtng/react-loading-skeleton">
				React Loading Skeleton
			</Link>
			<Link href="https://github.com/airbnb/enzyme">Enzyme</Link>
			<Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
				Flexbox Guide
			</Link>
			<Link href="https://firebase.google.com/docs/reference/js?hl=Es-419">
				Firebase
			</Link>
		</List>
	</CardContainer>
);

export default About;

import React from "react";
import Skeleton from "react-loading-skeleton";
import { CardContainer, Heading, Text } from "components/UI";

const SkeletonView = ({
	title,
	subtitle1,
	paragraph1,
	paragraph2,
	subtitle2,
	paragraph3,
	paragraph4
}) => (
	<CardContainer p={[2, 3, 4]} width={1}>
		<Heading.h1 textAlign="center">
			{title ? title : <Skeleton width={200} />}
		</Heading.h1>
		<Heading.h2>
			{subtitle1 ? subtitle1 : <Skeleton width={200} />}
		</Heading.h2>
		<Text py={2}>{paragraph1 ? paragraph1 : <Skeleton count={3} />}</Text>
		<Text py={2}>{paragraph2 ? paragraph2 : <Skeleton count={3} />}</Text>
		<Heading.h2>
			{subtitle2 ? subtitle2 : <Skeleton width={200} />}
		</Heading.h2>
		<Text py={2}>{paragraph3 ? paragraph3 : <Skeleton count={3} />}</Text>
		<Text py={2}>{paragraph4 ? paragraph4 : <Skeleton count={3} />}</Text>
	</CardContainer>
);

export default SkeletonView;

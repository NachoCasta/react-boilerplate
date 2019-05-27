import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Button,
	RatingBadge
} from "components/UI";
import { useAppState, useAppActions } from "utils";

const Reducer = props => {
	const { demo: state } = useAppState();
	const { demo: actions } = useAppActions();
	return (
		<CardContainer width={[1, 3 / 4, 1 / 2, 1 / 3]}>
			<Flex justifyContent="center">
				<Box>
					<Heading align="center">Reducer Demo</Heading>
				</Box>
			</Flex>
			<Flex justifyContent="space-around">
				<Box width={[1]} p={1}>
					<Button width={1} onClick={actions.increment}>
						Increment
					</Button>
				</Box>
				<Box p={1}>
					<RatingBadge>{state}</RatingBadge>
				</Box>
				<Box width={[1]} p={1}>
					<Button width={1} onClick={actions.decrement}>
						Decrement
					</Button>
				</Box>
			</Flex>
		</CardContainer>
	);
};

export default Reducer;

import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Button,
	RatingBadge
} from "components/UI";

const Reducer = ({ onIncrement, onDecrement, counter }) => {
	return (
		<CardContainer width={[1, 3 / 4, 1 / 2, 1 / 3]}>
			<Flex justifyContent="center">
				<Box>
					<Heading align="center">Reducer Demo</Heading>
				</Box>
			</Flex>
			<Flex justifyContent="space-around">
				<Box width={[1]} p={1}>
					<Button width={1} onClick={onIncrement}>
						Increment
					</Button>
				</Box>
				<Box p={1}>
					<RatingBadge>{counter}</RatingBadge>
				</Box>
				<Box width={[1]} p={1}>
					<Button width={1} onClick={onDecrement}>
						Decrement
					</Button>
				</Box>
			</Flex>
		</CardContainer>
	);
};

export default Reducer;

import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Button,
	RatingBadge
} from "components/UI";
import Octicon from "react-octicon";

const Counter = ({ onIncrement, onDecrement, counter, loading }) => {
	return (
		<CardContainer width={[1, 3 / 4, 1 / 2, 1 / 3]}>
			<Heading textAlign="center">Counter</Heading>
			<Flex justifyContent="space-around">
				<Box width={[1]} p={1}>
					<Button width={1} onClick={onIncrement} disabled={loading}>
						Increment
					</Button>
				</Box>
				<Box p={1}>
					<RatingBadge>
						{loading ? <Octicon name="sync" spin /> : counter}
					</RatingBadge>
				</Box>
				<Box width={[1]} p={1}>
					<Button width={1} onClick={onDecrement} disabled={loading}>
						Decrement
					</Button>
				</Box>
			</Flex>
		</CardContainer>
	);
};

export default Counter;

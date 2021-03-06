import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Button,
	RatingBadge,
	BeatLoader
} from "components/UI";
import { animated } from "react-spring";

const Counter = ({ onIncrement, onDecrement, counter, loading }) => {
	return (
		<CardContainer
			title={<Heading textAlign="center">Counter</Heading>}
			width={[1, 3 / 4, 1 / 2, 1 / 3]}
		>
			<Flex justifyContent="space-around">
				<Box width={[1]} p={1}>
					<Button
						type="primary"
						width={1}
						onClick={onIncrement}
						disabled={loading}
					>
						Increment
					</Button>
				</Box>
				<Box p={1}>
					<RatingBadge>
						{loading && !counter ? (
							<BeatLoader color="white" size={8} />
						) : (
							<animated.span>{counter}</animated.span>
						)}
					</RatingBadge>
				</Box>
				<Box width={[1]} p={1}>
					<Button
						type="primary"
						width={1}
						onClick={onDecrement}
						disabled={loading}
					>
						Decrement
					</Button>
				</Box>
			</Flex>
		</CardContainer>
	);
};

export default Counter;

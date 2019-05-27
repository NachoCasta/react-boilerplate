import React from "react";
import { Heading, Button, RatingBadge } from "pcln-design-system";
import { Flex, Box, FadeCard } from "components/UI";
import { useAppState, useAppDispatcher } from "utils";

const Reducer = props => {
	const { demo } = useAppState();
	const dispatch = useAppDispatcher();
	return (
		<Flex justifyContent="center">
			<Box width={[1, 3 / 4, 1 / 2, 1 / 3]}>
				<FadeCard>
					<Flex justifyContent="center">
						<Box>
							<Heading>Reducer Demo</Heading>
						</Box>
					</Flex>
					<Flex justifyContent="space-around" alignItems="center">
						<Box width={[1]} py={1}>
							<Button
								width={1}
								onClick={() => dispatch({ type: "INCREMENT" })}
							>
								Increment
							</Button>
						</Box>
						<Box py={1}>
							<RatingBadge>{demo}</RatingBadge>
						</Box>
						<Box width={[1]} py={1}>
							<Button
								width={1}
								onClick={() => dispatch({ type: "DECREMENT" })}
							>
								Decrement
							</Button>
						</Box>
					</Flex>
				</FadeCard>
			</Box>
		</Flex>
	);
};

export default Reducer;

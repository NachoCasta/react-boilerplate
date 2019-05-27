import React from "react";
import { Heading, Button, Flex, Box, RatingBadge } from "pcln-design-system";
import { useAppState, useAppDispatcher } from "utils";

const Reducer = props => {
	const { demo } = useAppState();
	const dispatch = useAppDispatcher();
	return (
		<React.Fragment>
			<Flex justifyContent="center">
				<Box width={[1, 1 / 2]}>
					<Flex justifyContent="center">
						<Box p={3}>
							<Heading>Reducer Demo</Heading>
						</Box>
					</Flex>
					<Flex justifyContent="space-between" alignItems="center">
						<Box width={1 / 3}>
							<Button
								width={1}
								onClick={() => dispatch({ type: "DECREMENT" })}
							>
								Decrement
							</Button>
						</Box>
						<Box>
							<RatingBadge>{demo}</RatingBadge>
						</Box>
						<Box width={1 / 3}>
							<Button
								width={1}
								onClick={() => dispatch({ type: "INCREMENT" })}
							>
								Increment
							</Button>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</React.Fragment>
	);
};

export default Reducer;

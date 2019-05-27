import React from "react";
import { Heading, Button, RatingBadge } from "pcln-design-system";
import { Flex, Box } from "components/Grid";
import { useAppState, useAppDispatcher } from "utils";

const Reducer = props => {
	const { demo } = useAppState();
	const dispatch = useAppDispatcher();
	return (
		<React.Fragment>
			<Flex justifyContent="center">
				<Box width={[1, 3 / 4]}>
					<Flex justifyContent="center">
						<Box>
							<Heading>Reducer Demo</Heading>
						</Box>
					</Flex>
					<Flex justifyContent="space-around" alignItems="center">
						<Box width={[1, 1 / 3]} py={1} order={[3, 1]}>
							<Button
								width={1}
								onClick={() => dispatch({ type: "DECREMENT" })}
							>
								Decrement
							</Button>
						</Box>
						<Box py={1} order={2}>
							<RatingBadge>{demo}</RatingBadge>
						</Box>
						<Box width={[1, 1 / 3]} py={1} order={[1, 3]}>
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

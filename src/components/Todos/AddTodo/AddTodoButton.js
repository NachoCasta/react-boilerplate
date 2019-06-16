import React from "react";
import { Flex, Box, Card, Input } from "components/UI";

const AddTodoButton = ({ onClick, onAddChange, onEnterPressed, value }) => (
	<Card bg="lightGray">
		<Flex
			flexWrap="nowrap"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box width={1}>
				<Input
					py="2px"
					px={0}
					fontSize={18}
					value={value}
					onChange={e => onAddChange(e.target.value)}
					onKeyPress={e => e.key === "Enter" && onEnterPressed()}
				/>
			</Box>
		</Flex>
	</Card>
);

export default AddTodoButton;

import React from "react";
import {
	Flex,
	Box,
	Card,
	Text,
	Checkbox,
	Label,
	Input,
	IconButton
} from "components/UI";

const TodoItem = ({
	id,
	description,
	done,
	edit,
	onDoneChange,
	setTodoEdit,
	onDescriptionClick,
	onDescriptionChange,
	onEnterPressed,
	onDeletePressed
}) => (
	<Card bg={done ? "lightGreen" : "lightRed"}>
		<Flex
			flexWrap="nowrap"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box width={1}>
				{edit ? (
					<Input
						py="2px"
						px={0}
						fontSize={18}
						value={description}
						onChange={e => onDescriptionChange(e.target.value)}
						onKeyPress={e => e.key === "Enter" && onEnterPressed()}
					/>
				) : (
					<Text fontSize={18} onClick={onDescriptionClick}>
						{description}
					</Text>
				)}
			</Box>
			<Box ml={1}>
				<IconButton
					name={done ? "boxChecked" : "boxEmpty"}
					size={24}
					onClick={e => onDoneChange(!done)}
				/>
			</Box>
			<Box>
				<IconButton name="close" size={24} onClick={onDeletePressed} />
			</Box>
		</Flex>
	</Card>
);

export default TodoItem;

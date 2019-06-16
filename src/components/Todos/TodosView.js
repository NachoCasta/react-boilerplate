import React from "react";
import { CardContainer, Heading, Divider, IconButton } from "components/UI";
import Item from "./Item";
import List from "./List";
import AddTodo from "./AddTodo";

const Todos = ({ todos, setTodoEdit, onDescriptionChange, onDoneChange }) => (
	<CardContainer width={[1, 3 / 4, 1 / 2, 1 / 3]}>
		<Heading textAlign="center">Todos</Heading>
		<Divider />
		<List>
			{Object.keys(todos)
				.map(key => (
					<Item
						key={key}
						id={key}
						{...todos[key]}
						onDescriptionClick={() => setTodoEdit(key, true)}
						onEnterPressed={() => setTodoEdit(key, false)}
						onDescriptionChange={onDescriptionChange(key)}
						onDoneChange={onDoneChange(key)}
					/>
				))
				.concat([<AddTodo />])}
		</List>
	</CardContainer>
);

Todos.defaultProps = {
	onDoneChange: i => i
};

export default Todos;

import React from "react";
import TodosView from "./TodosView";
import { useSelector, useActions } from "utils";

const Todos = props => {
	const { todos, newTodo } = useSelector(state => state.todos);
	const {
		setTodoEdit,
		setTodoDescription,
		setTodoDone,
		saveTodo
	} = useActions(actions => actions.todos);
	return (
		<TodosView
			todos={todos}
			newTodo={newTodo}
			setTodoEdit={setTodoEdit}
			onDescriptionChange={key => description =>
				setTodoDescription(key, description)}
			onDoneChange={key => done => setTodoDone(key, done)}
			saveTodo={saveTodo}
		/>
	);
};

export default Todos;

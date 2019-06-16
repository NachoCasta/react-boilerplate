export const initialState = {
	todos: {
		0: { description: "React Boilerplate", done: true, edit: false },
		1: { description: "Pagina PIMU", done: false, edit: false },
		2: {
			description: "Corregir I3 Algebra Lineal",
			done: false,
			edit: false
		}
	},
	newTodo: { description: "", done: false, edit: false }
};

export const reducer = (state = initialState, action) => {
	console.log(action);
	const { type, payload } = action;
	switch (type) {
		case "SET_TODO_DESCRIPTION":
			return {
				...state,
				[payload.key]: {
					...state[payload.key],
					description: payload.description
				}
			};
		case "SET_TODO_DONE":
			return {
				...state,
				[payload.key]: {
					...state[payload.key],
					done: payload.done
				}
			};
		case "SET_TODO_EDIT":
			return {
				...state,
				[payload.key]: {
					...state[payload.key],
					edit: payload.edit
				}
			};
		case "ADD_TODO":
			return {
				...state,
				[payload.key]: {
					...state[payload.key],
					edit: payload.edit
				}
			};
		default:
			return state;
	}
};

export const actions = dispatch => ({
	setTodoDone: (key, done) =>
		dispatch({
			type: "SET_TODO_DONE",
			payload: {
				key,
				done
			}
		}),
	setTodoDescription: (key, description) =>
		dispatch({
			type: "SET_TODO_DESCRIPTION",
			payload: {
				key,
				description
			}
		}),
	setTodoEdit: (key, edit) =>
		dispatch({
			type: "SET_TODO_EDIT",
			payload: {
				key,
				edit
			}
		})
});

export const initialState = 0;

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

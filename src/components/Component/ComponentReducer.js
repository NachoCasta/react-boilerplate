export const initialState = {};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// case "INCREMENT":
		//    return state + 1
		// case "DECREMENT":
		//    return state - 1
		default:
			return state;
	}
};

export const actions = dispatch => ({
	// increment: () => dispatch({ type: "INCREMENT" }),
	// decrement: () => dispatch({ type: "DECREMENT" })
});

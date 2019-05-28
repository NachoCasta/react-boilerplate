export const initialState = { signIn: true };

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_SIGN_IN":
			return { ...state, signIn: action.payload };
		default:
			return state;
	}
};

export const actions = dispatch => ({
	setSignIn: () => dispatch({ type: "SET_SIGN_IN", payload: true }),
	setSignUp: () => dispatch({ type: "SET_SIGN_IN", payload: false })
});

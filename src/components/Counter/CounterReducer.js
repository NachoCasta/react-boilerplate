import { database } from "config";

const initialState = 0;

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_COUNTER":
			return payload;
		default:
			return state;
	}
};

export const actions = dispatch => ({
	setCounter: value => {
		dispatch({ type: "SET_COUNTER", payload: value });
		return database.ref("counter").set(value);
	}
});

import { useReducer } from "react";
import useCombinedReducers from "use-combined-reducers";

export const useReducerWithActions = ({ reducer, initialState, actions }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return [[state, dispatch], actions];
};

export const useCombinedReducersWithActions = reducersWithActions => {
	const reducers = {};
	Object.keys(reducersWithActions).forEach(
		key => (reducers[key] = reducersWithActions[key][0])
	);
	const [state, dispatch] = useCombinedReducers(reducers);
	const actions = {};
	Object.keys(reducersWithActions).forEach(
		key => (actions[key] = reducersWithActions[key][1](dispatch))
	);
	return [state, actions];
};

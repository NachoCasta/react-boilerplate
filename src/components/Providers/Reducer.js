import React, { createContext, useReducer } from "react";
import useCombinedReducers from "use-combined-reducers";

import {
	reducer as demoReducer,
	initialState as demoInitialState,
	actions as demoActions
} from "components/ReducerDemo";

export const StateContext = createContext(null);
export const ActionsContext = createContext(null);

const ReducerProvider = ({ children }) => {
	const [state, dispatch] = useCombinedReducers({
		demo: useReducer(demoReducer, demoInitialState)
	});
	const actions = { demo: demoActions(dispatch) };
	return (
		<StateContext.Provider value={state}>
			<ActionsContext.Provider value={actions}>
				{children}
			</ActionsContext.Provider>
		</StateContext.Provider>
	);
};

export default ReducerProvider;

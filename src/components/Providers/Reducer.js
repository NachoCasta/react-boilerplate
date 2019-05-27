import React, { createContext, useReducer } from "react";
import useCombinedReducers from "use-combined-reducers";

import {
	reducer as demoReducer,
	initialState as demoInitialState
} from "components/ReducerDemo";

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

const ReducerProvider = ({ children }) => {
	const [state, dispatch] = useCombinedReducers({
		demo: useReducer(demoReducer, demoInitialState)
	});
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export default ReducerProvider;

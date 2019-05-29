import React, { createContext } from "react";
import {
	useReducerWithActions,
	useCombinedReducersWithActions
} from "utils/hooks";

import * as Counter from "components/Counter";
import * as Login from "components/Login";

export const StateContext = createContext(null);
export const ActionsContext = createContext(null);

const ReducerProvider = ({ children }) => {
	const [state, actions] = useCombinedReducersWithActions({
		counter: useReducerWithActions(Counter),
		login: useReducerWithActions(Login)
	});
	return (
		<StateContext.Provider value={state}>
			<ActionsContext.Provider value={actions}>
				{children}
			</ActionsContext.Provider>
		</StateContext.Provider>
	);
};

export default ReducerProvider;

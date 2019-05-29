import { useContext } from "react";
import { StateContext, ActionsContext } from "components/Providers";

export const useAppState = (stateMap = state => state) => {
	const state = useContext(StateContext);
	return stateMap(state);
};
export const useAppActions = (actionsMap = actions => actions) => {
	const actions = useContext(ActionsContext);
	return actionsMap(actions);
};

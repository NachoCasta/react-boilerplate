import { useContext } from "react";
import { ActionsContext } from "components/App/Providers";

const useActions = (actionsMap = actions => actions) => {
	const actions = useContext(ActionsContext);
	return actionsMap(actions);
};

export default useActions;

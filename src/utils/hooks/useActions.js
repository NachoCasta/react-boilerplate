import { useContext } from "react";
import { ActionsContext } from "components/Providers";

const useActions = (actionsMap = actions => actions) => {
	const actions = useContext(ActionsContext);
	return actionsMap(actions);
};

export default useActions;

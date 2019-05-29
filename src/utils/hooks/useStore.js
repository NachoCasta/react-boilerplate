import { useContext } from "react";
import { StateContext } from "components/Providers";

const useStore = (stateMap = state => state) => {
	const state = useContext(StateContext);
	return stateMap(state);
};

export default useStore;

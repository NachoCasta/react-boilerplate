import { combineReducers, createStore } from "redux";

const createStoreWithActions = reducersWithActions => {
	const reducers = {};
	Object.keys(reducersWithActions).forEach(
		key => (reducers[key] = reducersWithActions[key].reducer)
	);
	const rootReducer = combineReducers(reducers);
	const store = createStore(rootReducer);
	const dispatch = action => {
		//console.log(action);
		return store.dispatch(action);
	};
	const actions = {};
	Object.keys(reducersWithActions).forEach(
		key => (actions[key] = reducersWithActions[key].actions(dispatch))
	);
	return [store, actions];
};

export default createStoreWithActions;

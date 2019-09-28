import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

const createStoreWithActions = reducersWithActions => {
    const reducers = {};
    Object.keys(reducersWithActions).forEach(
        key => (reducers[key] = reducersWithActions[key].reducer)
    );
    const rootReducer = combineReducers(reducers);
    const middlewares = [thunk, save()];
    if (process.env.NODE_ENV === `development`) {
        const { createLogger } = require(`redux-logger`);
        const logger = createLogger({
            collapsed: true
        });
        middlewares.push(logger);
    }
    const store = createStore(
        rootReducer,
        load(),
        applyMiddleware(...middlewares)
    );

    const { dispatch } = store;
    const actions = {};
    Object.keys(reducersWithActions).forEach(
        key => (actions[key] = reducersWithActions[key].actions(dispatch))
    );
    return [store, actions];
};

export default createStoreWithActions;

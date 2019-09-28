import React, { createContext } from "react";
import { Provider } from "react-redux";

import createStoreWithActions from "config/createStoreWithActions";
import reducers from "reducers";

export const ActionsContext = createContext(null);

const ReducerProvider = ({ children }) => {
    const [store, actions] = createStoreWithActions(reducers);
    return (
        <Provider store={store}>
            <ActionsContext.Provider value={actions}>
                {children}
            </ActionsContext.Provider>
        </Provider>
    );
};

export default ReducerProvider;

import React from "react";
import ElementsView from "./ElementsView";
import { useElementsActions, useElementsState } from "utils";

const Elements = props => {
    const { newElement, setQuery } = useElementsActions();
    const { query } = useElementsState();
    return (
        <ElementsView
            onNew={newElement }
            query={query}
            onQueryChange={e => setQuery(e.target.value)}
        />
    );
};

export default Elements;

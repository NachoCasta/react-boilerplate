import React from "react";
import ElementListView from "./ElementListView";
import { useFilteredElementsKeys, useElementsState } from "utils";

const ElementList = props => {
    const { query } = useElementsState();
    // Function to filter list elements. By default checks if the query is included in the title
    const filter = element => element.title.includes(query);
    const elements = useFilteredElementsKeys(filter);
    return <ElementListView elements={ elements } />;
};

export default ElementList;

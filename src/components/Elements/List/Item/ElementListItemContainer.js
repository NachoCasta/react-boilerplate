import React from "react";
import ElementListItemView from "./ElementListItemView";
import { useElement } from "utils";

const ElementListItem = ({ id }) => {
    const element = useElement(id);
    return <ElementListItemView {...element } href={`/elements/${id}`} />;
};

export default ElementListItem;

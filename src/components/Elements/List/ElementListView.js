import React from "react";
import { List } from "components/UI";
import Item from "./Item";

const ElementList = ({ elements, ...rest }) => (
    <List
        bordered
        itemLayout="vertical"
        dataSource={ elements }
        renderItem={id => <Item id={id} />}
        {...rest}
    />
);

export default ElementList;

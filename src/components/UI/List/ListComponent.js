import React from "react";
import List from "./List";
import Item from "./Item";

const ListComponent = ({ listProps, itemProps, children }) => (
	<List>
		{children.map(child => (
			<Item>{child}</Item>
		))}
	</List>
);
export default ListComponent;

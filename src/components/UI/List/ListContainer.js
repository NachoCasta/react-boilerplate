import React from "react";
import List from "./List";
import Item from "./Item";

const ListComponent = ({ listProps, itemProps, children }) => (
	<List>
		{children.map((child, i) => (
			<Item key={i}>{child}</Item>
		))}
	</List>
);
export default ListComponent;

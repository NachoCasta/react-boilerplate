import React from "react";
import Nav from "./Nav";
import Group from "./Group";

const NavBar = ({ mainItem, leftLinks, rightLinks }) => (
	<Nav>
		<Group>
			{mainItem}
			{leftLinks}
		</Group>
		<Group right>{rightLinks}</Group>
	</Nav>
);

export default NavBar;

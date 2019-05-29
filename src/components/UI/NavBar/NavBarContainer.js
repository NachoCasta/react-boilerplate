import React from "react";
import NavBarView from "./NavBarView";
import Link from "./Link";

const NavBar = ({ mainItem, leftItems, rightItems, current }) => {
	const itemToLink = ({ to, label, main }) => (
		<Link key={label} to={to} active={to === current} main={main}>
			{label}
		</Link>
	);
	return (
		<NavBarView
			mainItem={itemToLink(mainItem)}
			leftLinks={
				<React.Fragment>{leftItems.map(itemToLink)}</React.Fragment>
			}
			rightLinks={
				<React.Fragment>{rightItems.map(itemToLink)}</React.Fragment>
			}
		/>
	);
};

export default NavBar;

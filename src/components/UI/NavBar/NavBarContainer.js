import React, { useState, useRef } from "react";
import NavBarView from "./NavBarView";
import Link from "./Link";
import { useClickEvent } from "utils";

const NavBar = ({ mainItem, leftItems, rightItems, current }) => {
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);
	const onDropdownClick = () => setOpen(!open);
	const onLinkClick = () => setOpen(false);
	const handleDocumentClick = e =>
		e.target !== containerRef.current &&
		!containerRef.current.contains(e.target) &&
		open &&
		setOpen(false);
	useClickEvent(handleDocumentClick);
	const itemToLink = ({ to, label, main }) => (
		<Link
			key={label}
			to={to}
			active={to === current}
			main={main}
			onClick={onLinkClick}
		>
			{label}
		</Link>
	);
	return (
		<div ref={containerRef}>
			<NavBarView
				mainItem={itemToLink(mainItem)}
				leftLinks={leftItems.map(itemToLink)}
				rightLinks={rightItems.map(itemToLink)}
				onDropdownClick={onDropdownClick}
				open={open}
			/>
		</div>
	);
};

export default NavBar;

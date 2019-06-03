import React from "react";
import { Hide, IconButton } from "pcln-design-system";
import Nav from "./Nav";
import Group from "./Group";
import { Box } from "pcln-design-system";
import Dropdown from "./Dropdown";
import { Expand } from "../Springs";

const NavBar = ({ mainItem, leftLinks, rightLinks, onDropdownClick, open }) => (
	<React.Fragment>
		<Hide xs>
			<Nav>
				<Group>
					{mainItem}
					{leftLinks}
				</Group>
				<Group right>{rightLinks}</Group>
			</Nav>
		</Hide>
		<Hide sm md lg xl>
			<Nav>
				<Group>{mainItem}</Group>
				<Group right>
					<Box p={[2, 3]}>
						<IconButton
							name="Menu"
							size={24}
							color="white"
							title="Menu"
							onClick={onDropdownClick}
						/>
					</Box>
				</Group>
			</Nav>
			<Expand
				open={open}
				height={(leftLinks.length + rightLinks.length) * 40 + 8}
			>
				<Dropdown>{leftLinks.concat(rightLinks)}</Dropdown>
			</Expand>
		</Hide>
	</React.Fragment>
);

export default NavBar;

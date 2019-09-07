import React from "react";
import { Hide, Box } from "pcln-design-system";
import Nav from "./Nav";
import Group from "./Group";
import Dropdown from "./Dropdown";
import { Expand } from "../Springs";
import { Button } from "antd";

const NavBar = ({ mainItem, leftLinks, rightLinks, onDropdownClick, open }) => (
	<React.Fragment>
		<Hide xs sm>
			<Nav>
				<Group>
					{mainItem}
					{leftLinks}
				</Group>
				<Group right>{rightLinks}</Group>
			</Nav>
		</Hide>
		<Hide md lg xl>
			<Nav>
				<Group>{mainItem}</Group>
				<Group right>
					<Box p={[2, 3]}>
						<Button
							size="small"
							icon="menu"
							ghost
							style={{ border: 0 }}
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

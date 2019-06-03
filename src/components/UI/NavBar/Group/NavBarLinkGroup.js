import React from "react";
import { Flex } from "pcln-design-system";

import styles from "./NavBarLinkGroup.module.css";

const NavBarLinkGroup = ({ right, center, children }) =>
	center ? (
		children.map((child, i) => (
			<Flex key={i} justifyContent="center">
				{child}
			</Flex>
		))
	) : (
		<Flex className={right && styles.right}>{children}</Flex>
	);

NavBarLinkGroup.defaultProps = {
	right: false,
	center: false
};

export default NavBarLinkGroup;

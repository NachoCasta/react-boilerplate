import React from "react";
import { Flex } from "pcln-design-system";

import styles from "./NavBarLinkGroup.module.css";

const NavBarLinkGroup = ({ right, children }) => (
	<Flex className={right && styles.right}>{children}</Flex>
);

NavBarLinkGroup.defaultProps = {
	right: false
};

export default NavBarLinkGroup;

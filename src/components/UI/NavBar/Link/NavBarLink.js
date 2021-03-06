import React from "react";
import classNames from "classnames";
import { Box } from "pcln-design-system";
import { Link } from "react-router-dom";

import styles from "./NavBarLink.module.css";

const NavBarLink = ({ to, active, right, main, children, ...rest }) => (
	<Link
		className={classNames(styles.link, {
			[styles.active]: active,
			[styles.main]: main
		})}
		to={to}
		{...rest}
	>
		<Box p={[2, 3]}>{children}</Box>
	</Link>
);

NavBarLink.defaultProps = {
	right: false,
	main: false
};

export default NavBarLink;

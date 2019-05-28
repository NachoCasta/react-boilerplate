import React from "react";
import { Link } from "pcln-design-system";

const OnClickLink = props => <Link {...props} />;

OnClickLink.defaultProps = {
	href: "#"
};

export default OnClickLink;

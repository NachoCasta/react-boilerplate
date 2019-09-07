import React from "react";
import { Text } from "pcln-design-system";

export default ({ children, ...rest }) => (
	<React.Fragment>
		{children &&
			children.split("\n").map((line, i) =>
				line ? (
					<Text key={i} style={{ fontFamily: "monospace" }} {...rest}>
						{line}
					</Text>
				) : (
					<br key={i} />
				)
			)}
	</React.Fragment>
);

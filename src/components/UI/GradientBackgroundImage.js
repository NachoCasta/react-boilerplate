import React from "react";
import { BackgroundImage } from "pcln-design-system";

const GradientBackgroundImage = ({
	from,
	to,
	gradientHeight,
	height,
	image,
	children,
	...rest
}) => (
	<BackgroundImage
		{...rest}
		style={{
			minHeight: height,
			backgroundColor: "black",
			backgroundImage: `linear-gradient(to bottom, ${from} ${gradientHeight}, ${to} 100%), url(${image})`
		}}
	>
		{children}
	</BackgroundImage>
);

export default GradientBackgroundImage;

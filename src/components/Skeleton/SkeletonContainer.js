import React, { useState, useEffect } from "react";
import SkeletonView from "./SkeletonView";
import { sleep, loremIpsum } from "utils";

const Skeleton = props => {
	const [content, setContent] = useState({
		title: null,
		subtitle1: null,
		paragraph1: null,
		paragraph2: null,
		subtitle2: null,
		paragraph3: null,
		paragraph4: null
	});
	useEffect(() => {
		const auxContent = {};
		Object.keys(content).forEach(
			(key, i) =>
				!content[key] &&
				sleep(Math.random() * 3000).then(() => {
					auxContent[key] = loremIpsum[key];
					setContent({ ...auxContent });
				})
		);
	}, [content]);
	return <SkeletonView {...content} />;
};

export default Skeleton;

import React, { useState } from "react";
import Button from "./Button";

export default ({ onClick, ...rest }) => {
	const [loading, setLoading] = useState(false);
	const onClickHandler = async () => {
		setLoading(true);
		await onClick();
		setLoading(false);
	};
	return <Button onClick={onClickHandler} loading={loading} {...rest} />;
};

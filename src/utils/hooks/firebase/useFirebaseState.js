import { useEffect } from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import { getDatabaseRef } from "utils";

export default (refPath, state, setState) => {
	const ref = getDatabaseRef(refPath);
	const [value, loading, error] = useObjectVal(ref);
	useEffect(() => {
		!loading && value !== state && setState(value);
	}, [value, loading, setState, state]);
	return [loading, error];
};

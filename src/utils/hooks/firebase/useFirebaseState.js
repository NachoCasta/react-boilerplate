import { useEffect } from "react";
import { useObjectVal } from "react-firebase-hooks/database";

export default (ref, state, setState) => {
	const [value, loading, error] = useObjectVal(ref);
	useEffect(() => {
		!loading && value !== state && setState(value);
	}, [value, loading, setState, state]);
	return [loading, error];
};

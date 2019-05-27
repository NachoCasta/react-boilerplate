import { useState } from "react";

const useForm = initialState => {
	const [state, setState] = useState(initialState);
	const bind = key => ({
		id: key,
		name: key,
		autocomplete: key,
		value: state[key],
		onChange: e => setState({ ...state, [key]: e.target.value })
	});
	return [state, bind];
};

export default useForm;

import React from "react";
import { useAppState, useAppActions } from "utils";
import { useForm } from "utils";
import LoginView from "./LoginView";

const Login = props => {
	const { demo: state } = useAppState();
	const { demo: actions } = useAppActions();
	const [user, bind] = useForm({
		email: "",
		password: ""
	});
	const fields = [
		{
			...bind("email"),
			key: "email",
			label: "Email",
			icon: "Email",
			placeholder: "user@domain.com",
			width: [1, 1 / 2]
		},
		{
			...bind("password"),
			key: "password",
			label: "Password",
			icon: "Key",
			placeholder: "password",
			width: [1, 1 / 2]
		}
	];
	return <LoginView fields={fields} onSubmit={() => null} />;
};

export default Login;

import React from "react";
import { useForm } from "utils";
import { useSelector, useActions } from "utils";
import LoginView from "./LoginView";

const Login = props => {
	const signIn = useSelector(state => state.login.signIn);
	const actions = useActions(actions => actions.login);
	const [user, bind] = useForm({
		email: "",
		password: "",
		password_confirmation: ""
	});
	const fields = [
		{
			...bind("email"),
			label: "Email",
			icon: "mail",
			placeholder: "user@domain.com",
			width: [1, null, null, signIn ? 1 / 2 : 1]
		},
		{
			...bind("password"),
			label: "Password",
			type: "password",
			icon: "lock",
			placeholder: "Password",
			width: [1, null, null, 1 / 2]
		}
	];
	if (!signIn) {
		const { password, password_confirmation } = user;
		fields.push({
			...bind("password_confirmation"),
			label: "Confirm Password",
			type: "password",
			icon: "lock",
			placeholder: "Repeat password",
			width: [1, null, null, 1 / 2],
			error: password !== password_confirmation && "Passwords don't match"
		});
	}
	return (
		<LoginView
			signIn={signIn}
			fields={fields}
			onSubmit={() => console.log(user)}
			footerButton={() =>
				signIn ? actions.setSignUp() : actions.setSignIn()
			}
		/>
	);
};

export default Login;

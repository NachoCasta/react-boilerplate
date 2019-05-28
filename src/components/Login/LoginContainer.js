import React from "react";
import { useForm } from "utils";
import { useAppState, useAppActions } from "utils";
import LoginView from "./LoginView";

const Login = props => {
	const {
		login: { signIn: signIn }
	} = useAppState();
	const { login: actions } = useAppActions();
	const [user, bind] = useForm({
		email: "",
		password: "",
		password_confirmation: ""
	});
	const fields = [
		{
			...bind("email"),
			label: "Email",
			icon: "Email",
			placeholder: "user@domain.com",
			width: [1, null, null, signIn ? 1 / 2 : 1]
		},
		{
			...bind("password"),
			label: "Password",
			type: "password",
			icon: "Key",
			placeholder: "password",
			width: [1, null, null, 1 / 2]
		}
	];
	if (!signIn) {
		const { password, password_confirmation } = user;
		fields.push({
			...bind("password_confirmation"),
			label: "Confirm Password",
			type: "password",
			icon: "Key",
			placeholder: "password",
			width: [1, null, null, 1 / 2],
			error: password !== password_confirmation && "Passwords don't match"
		});
	}
	return (
		<LoginView
			submitLabel={signIn ? "Sign In" : "SignUp"}
			fields={fields}
			onSubmit={() => console.log(user)}
			footerText={
				signIn
					? "Don't have an account yet?"
					: "Already have an account?"
			}
			footerButton={() =>
				signIn ? actions.setSignUp() : actions.setSignIn()
			}
			footerButtonText={signIn ? "Sign Up" : "Sign In"}
		/>
	);
};

export default Login;

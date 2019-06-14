import React from "react";
import { shallow, mount } from "enzyme";

import { Text, Button, OnClickLink } from "components/UI";
import LoginView from "./LoginView";

describe("LoginView", () => {
	it("SignIn matches snapshot", () => {
		const component = shallow(<LoginView fields={[]} signIn={true} />);
		expect(component).toMatchSnapshot();
	});

	it("SignUp matches snapshot", () => {
		const component = shallow(<LoginView fields={[]} signIn={false} />);
		expect(component).toMatchSnapshot();
	});

	it("has SignIn text when signIn set to true", () => {
		const component = mount(<LoginView fields={[]} signIn={true} />);
		expect(component.find(Text).text()).toContain(
			"Don't have an account yet?"
		);
		expect(component.find(Button).text()).toContain("Sign In");
		expect(component.find(OnClickLink).text()).toContain("Sign Up");
	});

	it("has SignUp text when signIn set to false", () => {
		const component = mount(<LoginView fields={[]} signIn={false} />);
		expect(component.find(Text).text()).toContain(
			"Already have an account?"
		);
		expect(component.find(Button).text()).toContain("Sign Up");
		expect(component.find(OnClickLink).text()).toContain("Sign In");
	});
});

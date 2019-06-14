import React from "react";
import { mount } from "enzyme";

import { OnClickLink, Button } from "components/UI";
import Providers from "components/App/Providers";
import LoginContainer from "./LoginContainer";

describe("LoginContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<LoginContainer />
			</Providers>
		);
	});

	it("changes to SignUp when clicking on Sign Up", () => {
		component.find(OnClickLink).simulate("click");
		expect(component.find(Button).text()).toContain("Sign Up");
	});
});

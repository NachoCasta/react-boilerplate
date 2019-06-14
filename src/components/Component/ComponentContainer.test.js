import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import ComponentContainer from "./ComponentContainer";

describe("ComponentContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<ComponentContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<ComponentContainer />);
	});
});

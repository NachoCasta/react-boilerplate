import React from "react";
import { mount } from "enzyme";

import ComponentContainer from "./ComponentContainer";

describe("ComponentContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(<ComponentContainer />);
	});
	it("renders", () => {
		mount(<ComponentContainer />);
	});
});

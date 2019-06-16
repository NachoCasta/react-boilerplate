import React from "react";
import { shallow } from "enzyme";

import ComponentView from "./ComponentView";

describe("ComponentView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<ComponentView />);
	});

	it("renders", () => {
		shallow(<ComponentView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
